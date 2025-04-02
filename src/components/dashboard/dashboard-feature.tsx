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
    "2zMfWtRa2e2SQ6Zn95RrqZRw7q8bPu6qBJs84kiuqEw4HDAiD57aK5UTq2a9dCMeSQS93Uhjt4nsbFx87jXG3y7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P8md8TtKYRZ9DvATDsC7Z2WYnZaydwLQ8hygb3ufvAsqqiDscHvgttry9caTYQ7FM2sd3SudFoVq3S97bGxitmL",
  "key1": "gZv3U8d6byMujEwmJ7CUWgVs5fKScpydjVqY48FhrZVswsSMZjtnjiXM67KCsY7YCuvyndtxS5uyBAAeKqgeejp",
  "key2": "5965Q1ZHtAE5NHzkrYwtUy39ajcPUk2uAhwYmfBjDydpfj73fuYjNHhbPCF6TwWexgGX3j1iSgt9rAyQd6JMfabF",
  "key3": "4V4SfHquv8hEKcFKbz81Zh8g614mDSRVd75k5AvuwA6q8yX666QEAr4Xyqmu2JjtDgtmmkU2nnQNmRNMDAMWXuSs",
  "key4": "4MzzP7qQvZyR8RTb5e21JZ1oFWcqvfeb57tGc2pMbjdBEHfvNZ1WoXG6rzxpvCD4k7gv8z1hFAdhd8PHNui11WzS",
  "key5": "5kVMeAYcLj2jJ2CELBjr5tdB2zy9t5cg9DdDUjo1bsDF1u8p9vgwfvVefv5J5BmBNM4EoyvFPP8c2LDwcfEKe8WX",
  "key6": "mJT1bkgSRbzyio2Ph4C5qqAHh5UEpj68x2e8QfGYhSNrdPfxLoTCRDyHaG5M38PJ6NaPYJx1FDdrJmfNgTRLuTL",
  "key7": "4dCQrzeQfxFSS5GV5Nuw63LNRc8yP4ChcqRKDwAjoeffDzPKqgbknyCquKADNKuheczNEtMX8KMSKEDKJLkEBpw8",
  "key8": "3FeQEiQRYt2T8o2LEhfZN61HMs6NVJcwCji6o8HfjnUkgFJzpHKVn477zobVGy9M4oabmc1w2UKPKNELeagDHEvU",
  "key9": "5FxWHkYokbYde7wy4a9DbL2y2pFUHAiiq6wJTBFCSXcqLRM2EmFRqcy5rmotodhr1ELR7cagpD9iJ6VWNDXhFW9b",
  "key10": "2dzHtV1MmhoiKhSBWeNs4thnJ3uhKsgxjEzUiubvpnygEAo5voEH2cNWMn1TAutCHpMACj6u51eyPPS81ZZdiPSU",
  "key11": "W3Xbj1XLFGey2sSKynNCbsZ7uN3HdHBLv8Yfa4xYkRzo86jKb54Wd1t7PFrctQCnwHr565ujiFxAzxb9o6iYJbQ",
  "key12": "2Jtu1r85P56Q6d8kB9oQniWKCfZPCF7a7EqGC4KTbT5Z6yDqYvcBbKUdbhhqbqhhPGkCNv7Gj3pYECXTusWbB9dY",
  "key13": "5i6RmDs8LGLgvX1NsALRGFzE7VKk2aBp96xT9p2Er39hMSDj65zi6KN9M4R4HtoFtCP5TR9etevRfTwPshoLJZsB",
  "key14": "5CwmSYnBdJ2HSRnVgA9C2TEWEMoLAVVLrvxdjsmZayhgDgUc9f2M4yw8NkSJm5X7KWmiyUAhBmabRdmpm1bAi4PR",
  "key15": "2D7f5wMTtKNAUn78ZQw1r3SkmxMmwGPEemHZN9DJ8yphhdoumeEzBcerMHmcA7kc4CdeBmY8iXh4qhosQqvEAnpk",
  "key16": "5Qboy2HNBn5zY4ssWJp2mUVhA8NfSAW6uhSLPWXi9njaaTyxxmAtG9Ns37an5qXDZWiTA9PvSFJAQiV9zz6tocqN",
  "key17": "4buoLCANooEHXJXA4x2RiG3Cm6THt7w1UvC9ui2Qw3pr5Kk94KTLsdaFuUWBajFjJFNfpFqkixyzCP3d52EfaV9U",
  "key18": "5vb5vhJHVvFFqtcAtHb6ScEebkJzEao61RhnmhNVSCLiPgUiZyCKgxWWX2FZCaoMAHZ78LuTTfQ1pitWQsbTBELH",
  "key19": "XLukhfNESC1vAVwbsRFeDDVkx2GZCG9EcJQD6si1GTC1fUHEEGYQxJR1qdufhme3xTriCyMtxdnGPMD221Kj3jf",
  "key20": "3wjWzbNSCxEmVMbPYLKvfrMDWULZGQXVop8ptpoJ9wmGmE6k895kKpuML4f5jBDmFy796pUDxQE1CgQeoteJMmXg",
  "key21": "5UF7eUdmytQJeZHismCSoeyEa3JvnP96enWNyPcKwyscQgE6htLDyt7zRNagw2wtBifEd7hSpBa3Td9PMaMakwus",
  "key22": "5rvjBf9sizQGHrnrv3BL3J7urChskV1R4hzHCqwfMSGPkb6Ctxp8TP43NnkrZwQJkJquZTAaRM98uyCaD5r8JCh4",
  "key23": "VtjmC1Mac8DBMtxTDn86GGwasS19B1Kr13TyKVtd3PqKok1dAcE8ycKcUH4Hdyhfj3pbnTGTUWY86V5SaqvJE72",
  "key24": "How4Wu2smdudEEZUzrUMcfYgTTx1fRz7FfhUzp18fpFVx8qpLesLsHiJjhFetmnq1369zuTq6sa7Dwnb9tPsVjS",
  "key25": "25Fqzeqqs6rtebF4Qh6uGDRgwYf1n2ChMWEXf3qu5umWNj3yEJvENbVNFU4GPmjLu377AcfkgktR2dTeWfPSNEQA",
  "key26": "3TJFFBBVqikwX4qxhBZNQbenk3MYrZ5xjZAWu5fCXc85A6PF862CMN2kT3iJ5kGDyZMQa5kbc4MHbnyMECxwUBDy",
  "key27": "2EyNb5DG9EqjoLouRrhg9i9VDgU6jvR5UynBQHnpTjzN2o2F8tG4ZY4ZfQ8ptB3jqhDJv7a1PWGR4X9KbzL9rbxG",
  "key28": "4sDqXAYuYBaSZGtvaMh8cihhSrUexSfCX6fgWMCrUCeg3Xqru6o2nHgpTVy7BU7d3rQA4pVfBSWGiAJFJ9hEry36",
  "key29": "4Q1JvbJ5DcV36v3SCqxhb86P3f7Fn7cXzM37VM3A4MNz4QySsFCn2peHWDACXta6fCVK8oaLPxbc13ggLYy3HUTT",
  "key30": "mMnwUgJ1jSDbxbPA8UrCrmCpvZcdgyXaBQH2Uqg1qnRPUbwABfuqcY8TfsNX47aoB6nidtPMquq8GXYYx5Dw8jb",
  "key31": "5peFLCJYv925gGh54fZFnbB2Vq5DCJfct29nhFb7FTQRJSMW5EQWSZVsc2eUSxiCCyYuKPW9aMg9eP6jdtfhuJ4H"
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
