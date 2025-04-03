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
    "2MvE2xj6cEJ2CXa829b5KqfY8KYKYmkaQeNMDVBSn3Fzib8Ch1ywH86mekFr8mWtcrSdwAp2GYegrL6HaPkQpYoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vqyzR2YGPtfPG9kNtgthG9nnaHStUwB4rgN96Pfk1voWQtTv55fxvXtvnJ5xCwNeRR7WJZRcNY8quCK85Wh2ttA",
  "key1": "px5g4DZcd1KfGzVQjvp9XFKpwmVpKRKFZKyEek4KMNJERTqXJEKNMkmn96obSZfCKKBD6SXVDT3c16eAq4TVCHA",
  "key2": "21pB5rXQhW5wqfpHeS7gwK2ive5JC9aiyJEf8t2CxqfDJzaLHACvKktwQ1LYEwkARYA9hGRhKhSLd9NYwjAXdmG7",
  "key3": "2V7WoLaLC6aef3ZAV4Ld2JscENseyL6kwnwwxYHQVTAGS5DGAZW4Boc9kUL199vWt94jx2Coa6RtrPPx3Mjduk93",
  "key4": "35WDxVTy4nvJvALgGDm3NopJRavysaHQAKq2h9sVFFgtipoBT24RJZUg2di1fQc4XfR1E9NE8tMgE4VEJ4EdboNS",
  "key5": "4UG55NZnYBxmTp1M7ECsuuMdFh4sdvoYsDAuGtwYm5XThnJpryQ8XydUGopYGtZbpMDmVq3jc1DL9M9aFHUkHZzd",
  "key6": "5foZm3L5RDUQ7jZW6o3Pge1bNRM8e9jKDZZxykt8nhfZ9XM1DEVvrwEXt5DGsNw6f8kwgjStiBLYt8c53wad7Sr",
  "key7": "2LwyuboAm7qQaWXPF2nhrTc3hpPKy3VWP7XqLRPa9jPkg91eAojHMW8TSrzV7GwNKVij1JWmzYWFWRRGEN4V3NFW",
  "key8": "3QJQiW8cQHNsUvNRkg7pwc7EBhgda7Egk1Kn2MowjJcwW1GBLjzuApdDY6QgTpkhjqHbBBLMtNALN7kagNNAN7tw",
  "key9": "4fJHGPkAee1TWYy45VeVvjwJGJopM5UsRcZY3GUSLNet7XWD2CrHG98hma63wucjQui9yvunRFp9DL76pb4rrDgU",
  "key10": "4UT9sfCmvvMvLsA1kvYpqQeuyemVxvyQttjexNKEhDcKKiKN5GTPEDmEgfBufrZdUZVAJDHoVmbXqxe9ztiVtaBG",
  "key11": "ZDhkhN6YXm9JncpMW9SEbwPNU8EDREvfefa3xv42dxhTUKjXtKo6u8giYozWAMTMr82pnceFXgRWppHdyyP3WAh",
  "key12": "fgSeXdVfihP5KGg59h9DR1793rdvD2PKphra6mW6C5fTE4xR2sewzhfKpMQVZLmNFUWUWXtkD8h1hqAZ2sRjcwJ",
  "key13": "45ocQhxEkeh7D8VKxUATdzr8jxSdvPvcKkbRDzFZU2JMzbLWRxmPDwchQe95r8jSm1XUiRG5yPhaEE1TCFhTsZY8",
  "key14": "3QuM6y1msFXkxukYJcik21sZyA3cXxox2287N7si5eFm5Ce4upw1qR4kwtPsxziUnZCXLRCPUrzuydm5B17cGoL8",
  "key15": "25Eo67zG48Hj7eNpbTvvUFpAS44HMNgMt1foWdMtmXBYdp9CzTvQe5HMzkAn1o6keteww1hXoAxx5Fm93EeQZYGu",
  "key16": "YLcKDGVwD4ns4BvZZgBrZSYiCQd9YmYujg6UmQJtcxojcYQnvG2ckNwPxT9AziHwo3mL3kUTPbgSdWHqs7eJDwh",
  "key17": "3oppq9HCMPZS7iQnzspzuX9hLWuCGmG1mF4UfQPSCC16v6x1VmWfQu2firQC5qrtVPNJnDTDqzzHTHsbGKijepU3",
  "key18": "4LjQ26EQAeA35v5mFDz9eXVYFHPiYYHospdhsqpLwcz8T8Ncm6NQu3wp7ufMxc8qVwDyLoyYq4hN1C3V6KjT7QJ3",
  "key19": "EJL51H3UwJo3Eh9HEYFoev4GumKmqt7sBCmCv1bADqgGsfpFXSb4j4c2RwL8S1fFc7m6F3ZDQNsXDUkhd9iAaYG",
  "key20": "5VK9PcPpvGHP9F2eUVavztdXHfkf4H99Aic3aVSXpfbjuiP4fp8RBCbBRQzCUikCRZdEubBUPRm4KYKjVL7iVX6k",
  "key21": "2mjfu7w5k9Etf7iR1afqBAF99Vp2QYoKk4oLrVd7bJYJPxSUhHjJDBaQ9V1Y57bE9cbMb83CczusSXkQBgjhtt5Z",
  "key22": "5JJN7rsa7SQabGFHqPL4VTxpD961cGrka57Hsh1wkdK1zSBkj4ezK5wVUrRMsTv6Ki5TaNnUkh6mppCW3YDUQ7Ye",
  "key23": "5WFGdQmAZ136SUy6MUi2yFRUw1n8qDNoeH3rCF7Xtyrzm8wA2ZgwEXqPT66mikrwhR3PQRWD556APt692vgzSQ4A",
  "key24": "4sJgPEm4xDMimmuPSLsa39pB9CYAuN6sUxC3NYZThBXTTZhSCugAwBJp9U1PaASAZVfFLgpX3sxh8a9Q7JbBvj3B",
  "key25": "3Vv13hcwtF5vGHtW4EugzB9eMxdoHvChvndMDXaNopLBc7khGAF848MsXcZ1pMpQPKsdBrFgEdeTF8Mk9gi2gBk",
  "key26": "4gpPwQkntm23PfvssdUhjnP8ommg9jPQCLNpZf9gzr8SidFjAoB6CMMWTXSgvkobUKrRrtmFa1MuPzrUrA9d5Yzv",
  "key27": "3fGBv8B7ZFHj1MHfFkKWNLKATaR7TAbV8wrWnfJhBWFrMg33vquPhPDFEvdCSiJoRLZewfVhk7WTYKegYDazmT6q",
  "key28": "1LAW3tzGv97zocZTTHtDLyyyFApgA3PzGX6FY9J7nsTRu3LNsyNetDyBrsc1fRnfCYPoG7dsRQFi7WtnmLy9i9J",
  "key29": "52ft1J7n739PhZdF7m7CLvRLPVtDetkjAmnqnH3Qcup5RtMYxHFxWUYKmsNYFXzvLLK77Lja4wAxKfwjsp5CCFsF",
  "key30": "4r5xd3am9HJL9ks8EpA7MaA716W67zHjUHmGVW2teKUAfiWQkZLUV5V4WHaNBMZYktHDtSyHpF8hpH5miXrSLmVF"
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
