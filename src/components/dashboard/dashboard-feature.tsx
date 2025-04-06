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
    "3C4uTqR2eHA86KnNgUd5uw8gi8fMxYGR5yQhYXVPtiEBesHQzpPktVs19TkXbKE15B94eqvcemRzd7epJ6aRaFzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RVxpMF7aMjyk53HTey6zHjz2yYAXbsMXKieWBSCJormFimvBtZtoMguuKkL6nY8xhtYvKjARyaaNYrPpHwZdYgY",
  "key1": "2KNs4c68Czt57X1A4SZKjDt1wvFTBhXizQAyVMbTSYt8reTYbDbSjapoksbDrMfcbjb99bZqFyMDFTRWxT6uLdZL",
  "key2": "4n2oD9zpwsvxBUPT8jgbvz3MrM5RTWEmBkEmUQKBjgbcAV3oTQVEMAp7aKt14czGPG5TXWd57Rh8VgVEHfXUyqK7",
  "key3": "312r1KxywNJqaJZpUaZXHwJS7wjoPwWPJKwvDHE7tLUzmAiUSZp5EhWhxgpV8Tw95zdjcEd1aeUZ39cofvagqAi",
  "key4": "4P6yXT48ZkssMf3TWNfCzD6XVxKKjZZfxmmkNiGqarurv3je7mrNfcbaGrg2uPQHYMjyp3q9RUcpmt53XEi856N3",
  "key5": "5rhLV6oU4fVn4VtPkGt6GTjxDEUGkpn1WQRhRRkJgwJD2MTJjrDn9xH8cuCGNVVLhrY5H8ycStYPPiTFr4Cq3d82",
  "key6": "55n36jjFB6xXhYgSiVjReGPpDyghfB1s39xqC1p2LFTifBv9XE3jsUUbho8s1K8AASkiXPaLuS35zTbxuPcfdaof",
  "key7": "5p1r5nFyZniiwWKXWCeQ2pMhDAHnTY8X9zU8TK9skXEs3YLvpfUmJziZKdo6zuuGto9m16WKUup4dVVjCfZDpmZH",
  "key8": "2iPUq8C8Kq7VaUp2Go2bFrWdK53UFkG2TgTJqNUY5B1m1pm8KK227m1kxabMxwyX5wVtN2EA3gT2UorZCyxJgdr3",
  "key9": "2C6i42S2BGzyDEzBBZPFfAZv3cF34jVvydtynVwyXfhXuNSLutKrZov8NjZrdyMzGcZ7drWjoAPNc7yNJG6R1guL",
  "key10": "oz19gdTUKXJk57eJUKjxHak6uzu2119ZcPEyNSVDZKRuusccvC7uR22jr3ukvuSUppn875xp86KSDHPfHG29swN",
  "key11": "2J93ievjLfssz5YrpzU8gT8t5YZYKKJnWiz8yenhjCaZQfLmVSzvy2aUxhUNFrdRi89p2AUibWizU51eZEsxntNw",
  "key12": "2J4ioTZQ2XQ8rkS5ELj4pMhjfZPiLwddj6j7sLxTxVWrR3nkcdy6KKUkSWxEtiSmVYWa6rVv4tPF3EQRw5nqNkWj",
  "key13": "64FqTohu6DRnzVj2ycyr2GTmDzzV2cUMfV9A9w3585Ai9YSDZZayrVPaMxaDpeUWDBZL66oeUHJpad2DGJc1gekU",
  "key14": "4ur51bmHLHTv4aU2xrCsbN15RLbdkzyyE3dpujyyDUB9PpZvvVKTsTteFukxQW3KZwN9PzQnwiZSnEn7Wdz6Umnb",
  "key15": "2mjv3BFXBVLaYhtxj6AqVHiwP9HfWYEJwFNxvdLo9P4VNaVPBJ9Bx5yHKxB45fyUe9U9tFEAJimiiPHsoC4hFtZ4",
  "key16": "3sasmnNgGrrHkZPU2DPXjtns3v5XNxdWW2umGWPd3brFS4EVPsUU8JTP3pZS5Ny9EbK4UNafFp8iDak3C5PCoRbz",
  "key17": "3pMkZFg2dHVw1vNEce9wyimYcoKMyRvZQmrqRscGryPviJckPyhQy4buhFU7UxH13UGPrpSwt6HtvNaQGM4EtH8c",
  "key18": "49zRZ5GnxZq6TrkmDtztSGwVnPYQZ8X3PmXLKs6VxSsgs1WHq4Br4t8ySKVHSKXtVA8pieo35oaWbXVUPoACf2Rc",
  "key19": "2JGztHmkMjEu5xX7ZeCsHTSG2nYmmMXYWXP1nJPCJtUuj6oZrn8mnUuvwKwJpCf2mL9bc7G6bhrtbReAH1JhW35j",
  "key20": "2k4gujA7yDn8aFvX22ADXpqWSXsQYx57Wviwz9hGKZjRpHhRoT7TEUXhS6RvKdkmVM9MV939XERvwhCaBYWznP9u",
  "key21": "3WuMXsfL3WYxP7dDTLWQW8UU1K7DtSPRx3gzvKyLJonA8YYp8EpbmDqb9pv8xPG3oz7XZ81X178wn29XVchUnqnj",
  "key22": "3z7r3Ham9kBX4hi3EcSHWGQ8tZMMWz2Tj1HuLsihVJmnJmLAYmuQh8ajTq4EjR9aPk6AD4AgN2JvYuh6iBCSJ8mU",
  "key23": "5b4USQsXikgqa9uBZ6Qp52XJqtjKAZsmu8FDSz483Ns8afxGr8EMjmdGwE6ENjbNgHukZW27v26PjwtX84ppD2Y8",
  "key24": "2NvfQ9jq7ofWhSHmAQaL9Xh4cDC64NCg1CVMy8ajjc9dNEPMaqRy2MNLcRv3qrSRv6aE7YT1GzSukH9YNGXbxmiC"
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
