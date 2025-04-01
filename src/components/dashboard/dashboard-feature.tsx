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
    "epvKtWxo1RCenF3PX48ATRCRZwCtqQhjCnfob6zF1mhbn795hfTJ8BruHDbUs91ijvLj7uL68BYyNm92iphgokS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TXHJpbdrnjASsPnJCPyjERfLmTUPkgVMztSc4RnNfQW6WKDtGb7WBrDtx3wf6253AtZpvQ2LPNRqSR7baKRUtd6",
  "key1": "3DpkDZ6TYhhRsGt3KKEAjL4wdeiShmDv266Su7kkjCskz9cHQpSVD4DgXBFBZccnWYmAL6Emcz6V6xC3TCCk1oFJ",
  "key2": "4PbAWXgAB7NyR94x7z93eZfiE3dMNZK6pvAKDHXxZy9uGh9zNhrCBz83zSckbqGDYj5FXJCiRN8a2JtEhbJurKG6",
  "key3": "2WqN6PN7EetqvZZobUQFLWRW7znoUx271S6ugkQtAyGXvZEnhYVCCnJxKBKbbdjfS2X5sHuNSuq6R9AzvdfvaR89",
  "key4": "4B9sjz3FJRyJ1qVj237sr4VGDjnFGf6TPVFGtbYhXgqYpFVMGH5FCpJybxbP2VVjm4H6UwVC2qC5qvwXCE7zSBpC",
  "key5": "2oppJm6prNxZhi2YRKkPfVvBtC5b4qRDD8StSqma5yk2Cg1Z7SVFR9iKNg7YAba4wDgf5TEUX5VXKUhhZ6dFdxzN",
  "key6": "5q54bCn8LPkW7N1BK2TysdBCKG13JXVev2yuRrnbsLboDXz5fnFXGxg5TsUuVMgqZjG31W2caMPrtoZYoJfsJzvp",
  "key7": "37zwRYecyRxcaBfvFVrFvpVAmwchRbLcfR4bFqmfcAaDpAfNqJMxxCz6picz4XasxcnK21dJteU6cGuYP51QjgKx",
  "key8": "3qzcb651B82nMN5YNjME1aCKo5t7vPNQ5yC2m1dAinL3kioDF74iB3Ljy4Wzx7ab4VQ5uCB4ATZskY4bnucEnMo4",
  "key9": "2nY4UKzKu4iezCqXof7mSiSvvjZBWHECnpEaMhf3aAEUmijZERhC93iuVNwSPrQX6o2T63hXRQRaUwgQ8B1iLi9L",
  "key10": "2WMNos18KsS6MCPoxjPMZUQXqWahr9bPa2CaME6cgcym8mVSCvGJni44rXRgXGfmaV79zVeH2TLCtsd4hQQa6YnH",
  "key11": "KhBzGj9c9FKauSCdR8CcjEsg3MtVQ2WFfarf66PBkPUS6Sn283D9ojrauNMEG7NBRC9XvaK2Rmph5M1edvfWSuB",
  "key12": "2zaadunjiyLF5ZhVgDynwv4uvpfsYvux53npXFN31kkL2EN23w1cc4g6Ui3niXRPR7JxgahR7N9Wrj2L9XL1MoaF",
  "key13": "36FxX5BiFBiUc8Eb9srXNzoY1b3JcyiRcvLK3rHqda5KfKt79E5A1HHLkrpKsqfCocuxERd6quRC69ZghviHe1dh",
  "key14": "2xMvzsYMqGfBTfLsv1XqKscU119g7J4rmHeFsF8qiazzm6M6cGbU8U2hZsDDWJYHvjDBEKrFP6hLwXqDbw5E3Afx",
  "key15": "2xc57saRWY5L4BhNofPkkWTHzw6auJ71G3cchT49ZE4Ez9DqjjepFcGzPsJfXAqHsDbrRVoKojebZeFm1WhuGmh7",
  "key16": "3x8YSJoJ2hgHepc4VYSYPuByoo2S1AWrFSDU11q3ZRF8wwFpvWQqWsPJ6AeCdLJFU7qRecMg4SkuBDWRTiFrLuqp",
  "key17": "3L11d6NrZGsxZRPo5iTvYV4vQeoyFWvTqCkx82tVuZzEHHCE6239rKfvpXGkii1Z7jkaSVzs6e3BPTMEFArvVxx",
  "key18": "r3TtzEXaMunnUVyXxLh1kNcMYRnDHL68HJn8fWKq1ti4Tdc4i1jf1VxSca5c8GNMcJNE1zYh9HLMGpWVv1hLgmb",
  "key19": "4EUJqWp18j5HjcvESfxvitokg5JrwznJ6BxfmUitqww4yLgY8oiFA9RffwXLb3scKQsRAGzGiZXVKtMuiPAgbeEM",
  "key20": "4BR6pZ8y8sCWW9eCraCDsDGzC6hGrqAymcAFuhepV1VvRQXiPUHBucigyc7C9R6bY5bEMSxyqTU3ZrwxXqx69W1P",
  "key21": "2GAB1QgAcdQqxhMfemswYWF3gpKiB1sqijeC6cq2coDqD7vdq3HdCWkC8q9NT6aDoMbpGf4MWfbbBAaJb6V6TfVf",
  "key22": "2EFnUoUxjd2VjU1gKST2jQLDm6zbNeuNCVPM3EAzHtuTvfuWcf6Hth3S7r9CB4aNwg2J8AbEATchqxXtqYFA39RW",
  "key23": "rHLwkV1DQVYnXRXHnCxVikNXFKSvjY19rxRPX3EJ42MYq4bhFzAtL2a8Wqm4fgTAXNuCKzYDrWLyx3bCy56gQzJ",
  "key24": "2vSwAuz8ERVeZNbrMww9zFKrg38iCH6rVuW5tTXCRkhh5Hj1Ep7eLDQGfYcVKmTDmjeugtA5iyMyzAqq1jymMS3P",
  "key25": "4LRPEwNqP7yy6AusZefrJQ2eaUsbf27t4UjG9H8XqyE28ZNAVMnB2vQnZPfVcE1DKCN2mCqwEChgAwr9hkUfWtkT",
  "key26": "51BFZoVpPuX1eiB9By8uDk4CMLGKSCZAaJAuiFN15tukQE4ZapSUXxBcPpbPvkgPin22ej2jeZRQkUet8Cyvgkv9",
  "key27": "4DDUerpLrymdRhcSAkUhmjmMkX6azBUUSoc1dMT8dcQ2jgeFhW6yzJSEoPXBqDrv1M5SRp7d41xsyEVLrYV9v1bF",
  "key28": "54n2GiTTGj3pcovkpGkWpckbBnVTM4LbWAsrRRifSTKSh9QSAFNEq6dCu7B5Ua8E3y1BkP4rr9dSVtzbxe5dHtFr",
  "key29": "4sDBqLZh8aMQuGogEcZuqsYuNmHUrszpgKNPCmUC3hek69odAPJv42pzToEgL8sDnfhb6J22BfrKgEsVMbEdsKHq",
  "key30": "5pxWG4zKimn1KrXP3gan7VLeb3y3P8Hdr1fujMVK44cC7p1LiM9AArRXdk8EYjFX7a3mHCTRFU3KhhJpxzyvm9cx",
  "key31": "xbxDGfjQg6eedXtEGPSWba6i13wpuv34gihz6VoUCDRnJQtwRqQ6T9p9NzLfXhfZbCAhHqXDQeiWFS3Pqrgr5Ws",
  "key32": "shd5TpPaGH7zTyTAF9K3fZzHh6Q1BmFaYcHbxFK4EvTnGg9EGK9wVLm3hTrTLvnfxXTFmit7mXyoRdBwS5Z38kF"
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
