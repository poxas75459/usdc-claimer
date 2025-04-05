/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "63PnxM2bysZu1QmdW7SRpkfh5baugGvSKrHs2z5PHS91GTB4ebQTY27ioNFHYRgco3CUGpndnDrFo7KBBgFBt5Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnACYY5GVR5hr1n44JTq99mt731nPcskdDY6u3c1CdCb4AwGPW93zhdKaZiinAfTL2Uq7bmTvpq6RKzXRGHJXZA",
  "key1": "4PfhF2Wnm18w3zD5JqKy7Po8oY8Ktz4V1ANCgpuMKtNVh6QHppW6FjfeYpHprKwNsJCttuvSScg4Evr6gaVfTa7E",
  "key2": "3vumjdsLWTr3GqT9erbFfL6or2mapraYuD1mo3fXNoqJjv2tapYHYzTzUcqSp2v1wMPzwfJCmhpKVxhKETtEamnF",
  "key3": "52L9RyYw6uYE4EYUWQ5HnyJWWWp1dUnighjYMYTCqyn6JZN1QhxWstmavB4r8JgdaVbEBJ5BG5WREaHeaUjRPD5Z",
  "key4": "3ECTFtTrt2e5AbpfjSU6Lr6LSGvfQDTsXRAU1TZZpD7yv1Vx1Z9FrQacC6n565F3aRqrJyvGGBopXkCTnfutLMZo",
  "key5": "3gKaMapCgrJmT48vkEUQUTEAcGB6FKWDhJg2cAdMXNkwrivDMMNuBaVE1n4n6s9HMkcJafP4HgoiU7Yg4iBk4G3Y",
  "key6": "5ZujE8zb5BggNXYaaErPjWeAuMo82w1ud75KivCjXR9xBaqEoC3x3DqqArs274q2ScHW7Vz3Lh8ko9aQfTr7soSe",
  "key7": "5zrc7W6C938hLgJzxEaPzazaJaBK375n5oSBJgzuQwAmmCePBmkpkoqgFjgz5EfE4bJnVTy7koCDTLuioWp1xMzb",
  "key8": "4K5AG3F4fKS4dC3eERySGh8bWhTSTpGSKF7VAfK8hg8Tz3mhLcr26YKGfC5LCbWNBDjgYGTwSnDdczZ3HThGYncr",
  "key9": "3SwrSyBGNkYLeNmyAmMbJBHFzPMvrEiEruvBunDRd9vbYa1snSJMo6RUSGZT3RD57Q4mBHxiDHciZ2tHLbRUHfT5",
  "key10": "2s1ryFJf2AnkGnuMJL3m8RbeLngeX1LzQ16CvMzhte29gnFgy2tesv9oDAC5ieb9hMUaJm45eiVLestzSLdL9dSg",
  "key11": "2kyTSBBwwndsj2CmRqt49kTBLkZKt3eyQKktFjdhmcEinSiTb42YMHSVEnbFygVro3guzphM2Vjcqx75NyAC9njE",
  "key12": "31A4NBaNrXYiQWPVYbnbmswMKwohMECEVg6yvh8cUFnrMwaPyWYLP7sAh2vinZ4p8jo57AYngk2GSbAEHJV7xDut",
  "key13": "5Lms6c16piRyPrnvkSDrAstmT6ieThP1tCiQmqke5PcVppvc5ibT1rzKptoqo4AKnrV2qhD5EzCAfMAYF931N65A",
  "key14": "21bPRv9UTgUXiXJcYHkEngAYug72ob63mpHVpHQHLbpUCLQZH1JBWujTdhkipJ9b5faM2HCf5bkXoQpViUjjqg7r",
  "key15": "2wNQBkLoMhNk4xhwj7hjHgbwyJ2T2zpKEwcZyLd7z8GaQVJ7q3Uq8s3Z5kXbdMC2jQFQfGuN2KoJbr2xE7keyrm5",
  "key16": "1iLvk3a1twFPaDsMPudCghf5DUa8FCGCxXLCT7HzqDNfsjrBBkrC91KTQk5Cc6xFVM1RpYHdX5DPZLfTSieZDnw",
  "key17": "5dMXis6YAM4L6zs5DvtjfK9hqVAKn9hC7QZc3MaLBnzunUCyz829nqAE98AFESJ5ufwfqNBivHfj6skVsGbgSzd",
  "key18": "RpiovsFcJWjdPhcf1k5bZ6BUviaFk5m8dPUSszC4HQqx7a2z2oVTHdAgxzzmbiJvGpEiKa6i13Vrm9k4iepWhci",
  "key19": "47wmSGLFY7uGxzHJeNusb6SZ3mhwMLXgDyt7PoCjpDhZwrb1onW8NFEafyvznwbGXvkNhcqEZwv9Mq17VY3247DA",
  "key20": "r996HJUT4RKSrseT4vGnaMKBvbN4YAKkRkBTYnDaKecGaaLDhE2RYiKGxmoj3L2XaeXaJqEAfUa98HAphsXcC1Q",
  "key21": "5B5fzRUutmL7mekQXixJ2J2PJ9zzhn4UahPHirypNWXsF7By8xWmdBgpBAkAjwsHxujzbBu2CVLKLnpYcGzPqGsr",
  "key22": "2j3DXadMQeQGYHPrrhs8Eyd3naSyHdPbbNGkbTZeNZ6bZKz2o4p77AGNbKtqR3a3DMJrgwLqgJ82DEy6Fmt9Gpup",
  "key23": "2umSfaCKUwyrVZJi8neiwP5UusvAVbbFuLXKyCWGYN6wz2gxEDhMMFzUQJvt1RmANWgebV3KTXDHrDiyFr9dKZ8P",
  "key24": "3DxT2FTereqVmSyMAzxdd8NzeUgiha79YfrFnHzJYak9S1BnuqVV9uvWgcyDdLU9BC569nSFJDm3cMGjZPS3stpb",
  "key25": "2NzQjF133NdWWDXK4Y4KuK6rYqwLbU5QLDWkfznnHV5MknoFTRXTQ3HNZFxXDw98FC5AndSmJPcoC29DFP3iEQqD",
  "key26": "5B1UyB5YBoCMuEQhrqhHmDaEWTo8CvsP5UHVFxtE5T5fp1juLz3x5Z2DrTLrWDpQDRcy3GXDf6dmtrSNZpJg4Sp2",
  "key27": "4panYcLUBpv24wFWiG5yihxt7SKE66DDHxeMzhFo2k82kvqGeebzwYBLT1WThmRBPukNBEgKkajhsdxjAEvX7Qzk",
  "key28": "5XohcCTpWemVkup2vmJttUpenVN6mEsgoh75GeX7C3aYBzfDbkA2nsDfCAPA4M1cYLYA2E4Q6NSar6KfAaMf3PFd",
  "key29": "AKtzJLPkBQwAMzMDf6VMKvNt7zVDLP1gT8r7xYuUFg3Et3oqe9Fmm2cdWUqrcRDvFXZbMeZQSraTHHxMxgbugDf",
  "key30": "5LpTo7ecCzUt1WPg41MJRGEHDC3Apq5enoGq14UBt1R9hrCRWZMgJCW9dAqrBf576XUxEBWrVXFk1GJw6M2jTzdm",
  "key31": "5JG8fkkgKxcD6KbgfrnLrBATZVD2BK7ehLKeC8PEySSJzYQ1ditnMeeQNy6hJYQP5ESTd37seYy8BALgzaALBLuz"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
