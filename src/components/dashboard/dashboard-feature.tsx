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
    "yx2MpDemiGbpk3tduC5HkfpXEgsVM4paxH1Vd12E74XBEWtSEoWcmpDD8sax5LosiLMEDJnjMnR9GoLPUsBetTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYwhWUNNF21Vx1quSWy1YmLE39PbqJ3DTX7qhXX6CKSSS8qyXXmCsKPTxw25Mwdm6CSkJqji2oxFbuMGpNKUHCq",
  "key1": "5gCBqPbvkfsmVXuiqS6f4dwD8jhrqvpaa6cSCJx83CSNKycB56FLdBhtyoZ2YC6X75aJTJkH5bWZyKYoduxrTz1w",
  "key2": "3R2yRPHUgiR83PJVmormkuxyrWg4SKtdPWevu6ZhYo5R1tWUcrwTRqKchsxpn2wdFN1scjrWUmPuuMn1yTQ32Gb1",
  "key3": "2f7UzKXfAF7V8r4PnSPzocWy5aYoqcen4sLiU3UPZMafhxhjHtDxLVUASytifaycHMfvBU7mzKjCYgzrJrcGxK4R",
  "key4": "2agwzjt5QL4SfVYvEYNev9Mtz4D2MVsdsrdgUUBUEaNYSVb7HeP4omPhqgqh21D8ABheaPXxeHd9TVSrn1xHTwTE",
  "key5": "394mc2KTXFbVu8C9xHdGAyvb5MzmkLjZNTvAV4iN1eCnwLGP4KaNAnqN7iC7Kp3SJtvjNrMC2sYWVMdfVb3fpM2n",
  "key6": "542RU2XdxPRyGqbwEN2c1Q3uHVarGKryEbcjSdaYMVQfgSCwvZaQSBjevpnJchqUiEE8eYNXyqZ1vj43vSVSz546",
  "key7": "3od2NQHh5WmGnnfNxDXHBghDHEBD1tpRZSHdZBszzNxUxE3oWqWxJBm4AXPV26ocszP5hxyJayKjuhpmD9KwAxVn",
  "key8": "5HTf3fJaFZhXfoi1jS5XssFy9SRxuccDn7BMHKSwK5QvTGUhZASXWsbajcocgLcmrkm7ecpcFTpoEyNYJKx8ubKG",
  "key9": "drEd4QfzWX3sTCYDDWtRnHqyF6HFLXbvN4XaFGDtf2knXX2KeEq9ES895uruLzNkVzvfWzBZQ3PdMWJ8EhF4WgJ",
  "key10": "3dTKt7EqiuMm2J3yv1BzNxia1trmApx2Mu6eQqWkDZLxcE66T8GjF6hCNaM16bNyH8XeNqeZLDU1XscYqJHwpnHr",
  "key11": "2Gsbmt2FPV1oMs174a5MRPuXrg4HHzhe84impfC2yYKetNztz2ZbMxxA3hWifWLvFRmbrJN7NBWoayE1QddTc8RD",
  "key12": "2gKcZ25izJEv9vsNJb9gCWx4ofbRARJKTLnRBdAFJRebR2PpP7BLmPBGWgbd84ADGL8Mkk9tWqjWQ9QdMNt3WCzd",
  "key13": "2JWRDqNBbRCsNKmzgHCs6QXsg22Kcozx2w2PE2RMGNLV8xGNMc7cUyUJi1BER7XPrPbkeJogHRPAFUmaqQwArKrL",
  "key14": "3p47FfQeSG5MEp32PFXtoJVJ4vdjqeCnJSBd3tsXgqRryAzkVNMG9pMcJaFLrMAH7yLADZk18vJDc5DEigUKxWE8",
  "key15": "3294pZYJJ3mv71ByuGcK534SkBrNcYrK9vZ4iRMamG4BByHUDKj9eXrvJ2fm2mrvoH3ggUbHQ2p5pPPydHrt4iLJ",
  "key16": "3vdTTXV9dyGfvQDyZwd7G5jL4RyASzJJMYnY54zyGbUkEQESnyfMeC8hdjM51eugkqEuz3tUTupJbYW6PRHuoznz",
  "key17": "2YqbNLG5KSwtpKmsBCiuTw4F61ELgVGF6UkvxkjP5xQvVjo3AGnKsnHJ6hkvG5PZsds7GDCQmbouBpjycnBxTNaL",
  "key18": "3Te6DEU6zWT4NDytgsykx7kPxvtmorGbFrYuR6upH79GJ9a1djLQUzcXz3StW9BVc7xTaK8b2oL6yL51KTZf7DEj",
  "key19": "2VUiSiZscFkBnXzHyYf6b9PUfGUXPWPTgRhAnomhkzxfzMsaHe3B9akBNSVcSH3sVaAZyCoS3W8EMN43fxE3iR2m",
  "key20": "59xchPsNpG1FWnMKMm8h3GNzh4pkW2pjACk8hNwkJGPf7eQiMuvV6UGZAFF1TH5mSyFScm35QNLzXkpBke3HZ1Uj",
  "key21": "3NTmENyeTAQXk8HAoLGrrLJwz3S3W3MjRaQqNTJjiFdrqcFeABgWqsvNXcgR4ZLZxJ95UZ5cz7aYweiG41UBaq8j",
  "key22": "38QL6qeDCSfCTr77jDYrCuV6Vqx1KH11kmgwWhPEdqiurRMFnE4XbpnHWN4pMXmTNukoowXMnxP7Vi9BbANPJwWm",
  "key23": "3H9X32xaXPArKq4NLcCcvQjkmsReuqsY5fgrBn8HVCEQPpyGVYQy9hroqGC3WKqWVJs1sxHP7uVoPMYQBjhCQfLd",
  "key24": "5PdJPDp4WNwBdtVvmn6DXUoN5kQ4FjjX1mkpAkABEfnihs4dkze47uibLNkFi7g7CVTT2HTP5h1yq713M1kH5ntV",
  "key25": "5qpLUiiGSa4dftns7YqubDJ44JLYPchzb18yaSxzoZ6EEwcvLXCVpX14h5jpSxNSFZxmGD453rSYdMNsc96QbwdD",
  "key26": "AMT79ganwfoyABvrNGiumsTXindoJtxFCbBDrD5oZ4NfV24j6zB2NQiGE7tnPb8TshqythwcdT1RnEzeyDpoR6w",
  "key27": "3C5BuwvVLmATv1fTuihbdR22nPTrWVaccVDSTYLFTy8jcmGV2G7rnjodnkDbgynARLxxcECrXzG7VrTf3Eri8JHV",
  "key28": "5KXbhmkd4Hp631hTZ54o9KgtZwdzUiHrdE3MBstcFs4e5dgWNw1jVPAuPfNgjbD9mqnuxhTwB16BbDsPsvfFULAE",
  "key29": "5uauWJMrHULH9Hz1XEzJhdtYh6T4aaLrkxnNrSDUgbHzVT1Sgmx2ybT4XjM36SsxH4v5jL5jEXHKuwvRgbwnFzzm",
  "key30": "5UKh21xSm3347Sn3jCq1CJwMpu2RRZF7vFs5dsZxGsyr1Bw4ri9kQJxrxmEhFhtbSKPJfDzuC4EPJvKMvLdSf3Gk",
  "key31": "5ttJSrstESb9Q8o9xJMqN6ruQJwbxdfWrb4STt2haeqxMfkdytvdFnTkCdqpuPsvgM1ZB3tLS2wT4SzRddAxjVFp",
  "key32": "5ZMwdVvmjZANQtpmSaKm67UCKq89vw4Ye1hhUCSSkyyZUjJCBtMyh1TQfx6fMm7Nn9NSfLGjmGpRov1Dh5GhHyb5",
  "key33": "3HPs8faKDTjvpQBFeujckpPozUZEYXXx6HqyMrsVQNbm99gopMFDopdLJjcg5Az9yQ5zYuzEM74H8jUq9u8ZF7XM",
  "key34": "24hehMUrqE2PXC1D2LMnkoVjt7mBwcm9ajuHV6B8Gg9B9uxAiZu9p14GEu6aCDo2EoydUsNnkTCuff5GrQkwcx3s",
  "key35": "54vsitLAcJg4ivmTzmKTHdo1TKYLwAbfM9KoAvtFxwxNDbMzgWuBaymd53rpszzttGYwQmZUm9MRv3EE67rXYw7G",
  "key36": "2ptAi4FNHegjamktrygo9YVaS9dWxD6kdu1Myn4aCMXtS59QrpMnLwMNHkYyc8ZYCmY612S8kXBC1MkHqovR2tjH",
  "key37": "4fWTYvpP9vgYnaXqhLMw8QmvDGen4KZfgfUNhSBgzryZfbGPA296hAfo1PBfuGV7MunspPZtXz8nLJbUT5RfZET",
  "key38": "jErL1QETbnBbHfNx61AZwWf8usR3W42Csif3U61jBRHSgSpem7gEHJPbwNEvnF19jzFT8HEwCddeayMBDn1wafr",
  "key39": "4FTSD4PY5QU1wiHXAmep6ffAv8TWJg4uShsTED6f7UToT5zZq5yuUooEYaRQcmmcD8T7mHTTipjAdspYBLuikKAd",
  "key40": "uJz7Hdn894USW4pmFrAnjzFZ69PaJ3RYS5Pp1XZE1vyxaiET68vRRuHKmEryd6TnvM7ZtuHBLT5y8wYMbnwSoy1",
  "key41": "3kmHE8kFzL9zFzpEhENFAysHt4Ah67vbdfLB3viEK6ijwdYP9yL1ERXJCgDYaAWXFARXPi7T2qvSVsW35QxR1pQZ"
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
