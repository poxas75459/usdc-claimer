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
    "2DcwdwqMS3NKw4ERjLNyEa4VDPLaiy1P2qtnMay3HsAMQLkBHQSo4J8QptfnX9kHCPvAbCipGFLt4J1NDvcpUWRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dXUKAiim1Z94oPLmX6DqdZmx3thShwNHdiEj4MZVSfH488MLwG2iyxK2wjZpeos1RGm7GaUmqpUJ5f4zm5X131",
  "key1": "4QE8fJRKkhDEUYDRS24FWYRsgJqhuiuEMVpoxZzPRii75zoodeWEu8KF3qNTTqNpcUXx3PW4zwbWApgdmh9Pze4H",
  "key2": "2XwtwQ3ZwF2bNJyE4M2KQ8nEKYj2BLh9Le6CNy3peUZ5XH4GNtjhsxHqBoX29nYewKxGGBLpaoAbKtGAjBmHdH9H",
  "key3": "28EEVSVWB8a2kyGTD3Yfok3zWpVrMG3F1XryRNmNaTVYqpjaBrvqyCHCxWLase9ocVXDQ2yiTM1T78heDRF3qnhA",
  "key4": "3YLBxiBT3ad8eifSgmcV5c893W4ujSjMPJyEUDEKT7dw6AFdkfn4WAQmMi6fGQESUCxPRiF7ipCZBE22MYm6nYQN",
  "key5": "ELxdxyt75xfLpFZXCoTYhvwW6PeSMDEX5ax7CNGdTs3xpqWgv6AW3Cf5r6toBSWrh1TDYttDHxDxRWnsC6NakVZ",
  "key6": "5bYQmrhNBykvPmLvHQq4LotStGA3wnx1xCfN6RZuxXp2GJTW3HUUh4HQvj6exyYThso3CNK2Tu5z2Dc7kf6CctaS",
  "key7": "2ZPGTAKWtVLj8bwXTQCLNyEmvTDFLxbxkyfCVePe4giNWD1WVBesD5jekMDNfbBZwmeLEEnrrRnjtsGq9s2UxwSf",
  "key8": "X7se56xc9piKtJsaQHwWgsCF8LngAKEUNN35T3qU1ygFvXvJTPNTjP1Wuk3CpeccTqKWVLs4cf8RTL5NSbiFyuF",
  "key9": "46ePRwPSkU8G261k66mnsDoCFdGn7TtWUwMwmvvaq8fMzQrQVaiEk13zxBkS8yKKfN2gKziYP4enF7UGbDsVcc62",
  "key10": "3TzRX2QpAC5aKxXM5a6zePTKurmGPSgFY7DT6EPi4wmtxHHfHpPTR5KrjvQCA6uhKi5oTPJa55o8ExX5j46kziqX",
  "key11": "gnH6Z5v3heicnJ9fe1rZ9F6DahVB3UVTojy6KwKu1AQTNMatuhUNZ3yqEUgJsb1FFszLh4oNLxSYCD66g5KuT21",
  "key12": "ZkkoBErkwZ76SY3cK3mCXFUz8eTQNWwQCSCR9fpTFQMNkRSDrnqUqpXdMBG8KQy9RxVdrqPgfKmYHqgmrRjicq7",
  "key13": "3wquy8M29J7bPL4TwS49UnnMY2iTrbNKcmparfmYjzaHKWjhcHMJRdfEpFa134vYctqCUoYZ6eGMzTmcZnZeeB1h",
  "key14": "8vz4sD5HA7KhpsqtCKaB2vEBLbVz3tvyxsYCMKaqgmvpbkMfauB8AHErCgq2bNrouGT6tYpcGTNft2u5sEta8ko",
  "key15": "4ewDUSpwX1WVmxYqDdZWSE4LCpxMbnnbCdvs3hMzwr8eByAH9eQUUaZDdW5XUC36oZRsNvJHuk6nKjRWvF3yvhNn",
  "key16": "52szwvo83fYj8gKVBj7pCLKvG76tKGsarCHRafe2qBErJqdN2vHuP1NejZJVxvrmaY2yEnzTykxRWCokakbeqwJv",
  "key17": "21wLgVQajf94jqnVhzdZkKin5Cwa9JdSEjSoioZRkGCzY5ftYcrWqt7637gbKEq5hyg9uRyFiNGkeydWnuSzor28",
  "key18": "A4PwStjqE9RN6DcimgAFznjpUewpYyBLfrJNBEWMFueUdZtrfEWN8rYgXGeLFv3X4Lwxw4Sfp229c15zF8LMjuc",
  "key19": "5HLU5LTDm7D5xSeY5WS5JWeR9oBgfx98Pbc66yyrqekqi5Vg5RZa14rooMTQK4MU7YPTgWrie5DopwhHtirCZKB4",
  "key20": "5mi7KJFGuseE87qCTvGykAyYCYHxnKaQqz8euCM4mSme7EMLcZQCfRKQuTAbZ68k3ttoTMrk2dni6Mgy7BQm2Hd6",
  "key21": "2fbGfRhLhtnHfCFEKiZN7wYgHKCvEtBRUDY9WgYXWa6Q6TrnpMqwBa3oB5qtuei3usVMeyDhbGLKNYhy4QgddqFc",
  "key22": "2YafPjjarLfqHudeQziVJr9L9eDx2G8579hQUNrs6BYi7Prh9DwNZhDzNjH21JHM5UfnfNVSnp4stgV2Y2eSDhWD",
  "key23": "5hbyqGjWVYXiQAoYhsRMRu7aBumPXGgMheskuyGhMrm67NMcw4uhM8m5A8e1YjC5Khzh5raYkrJHALkcKTm2usAA",
  "key24": "3sRCCG81ZzvdrYvvtxtrw8rg2akHyjRT6bojRnhs83RA9RbM1na23rNa6QD3SCco7bny4xpHa8qPZLQK7GGsYudH",
  "key25": "5Mmz4okfgTMnZRc2g61y8S154dpg9a57BbczpXfTswcjroYwTFRttfPt9S6e13t7VVXSFXPUqiyNxcf9EGh8wTFL",
  "key26": "3adjNajFsFQeng26rAWoCeUKDb6LXc3WqF6BH5VX4ySynTSFCg84rhynyEyzBspu52diNqbsaik72C3EpXn17jYj",
  "key27": "55vgvCptZXcKtjuEjByLZizDQn17V3GMQsUZSinBM4fnz2w5ZYGBUSDpheRQkCaBHCA7kgGpuaoCtrXKufjZv5Hd",
  "key28": "2gPtKQT7GxYJs2etD3ygv61eo5bfhRouLoRJaZQzwQZjWrZmKe1LnYCgaAQZrfNFhjCiCvndmhpqZUFgSVYVZWrL",
  "key29": "44uD51p1jRwMJuvQ9RmBe5TU2RyBktEFVbp5ZgirPbLeeXx3pXukWgCWr96jJBGp6bDfT8bCyxbwPdu7euneRrFW"
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
