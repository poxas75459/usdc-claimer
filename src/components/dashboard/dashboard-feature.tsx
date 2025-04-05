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
    "5VVPJjzxQvecY3nz1o9qvb4E62ou7RM1Tw2c7WF2nfNFTqdgEY3dbiYp6oG8x3Ci1Sn18NpMhU2feiGdKuUJHd9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LDHbTSuhvUJ2XsgG1xExvc7AdREESXF7D4eG7EsE2Ux4qdHa4d3CpNj1NnQC9JU5NALhGC7bAi6syRtWBWsYnWA",
  "key1": "4WrphaKFkgUimmMqy2wyYVfBS5qf81g1qjbr6Qwj766TohfJatz9gQCyEieC7deM97i88poB34j9FuxRksBcmZF6",
  "key2": "5UddExMgQ1a7Km6d9VBT7AKWC7YQNCmFBkrzaga18h5Nr328sh9VCvDjJDjSPPJH9efk3Zvn1VYdXq9N9XdrBMNy",
  "key3": "3z71QKuakoQLk5peN8h1ooG8Dcbd7o3kWoZpRP9SMFVS99R21RgWqhACc7hDPoNoNgMGxtb4DZD5hNq9JPbcBorw",
  "key4": "3BTPansz77e4SUaoYkRowt429X64NWms8tC2He7ZaSFDsCv3ihNQRQBGSSQqD32FULFU4xyQr1iBGg2kjCrsGnSd",
  "key5": "4aXXtWLbi96NuaecnoeFuGMxMuR9BfGJNSMQbESv7HLJsS3xDSkzs9NEVuQT84iWUAqT5n7TKTWreGpGebH1aj6k",
  "key6": "26S18J8czpkB6ngN9SjQdiJS23h6BG2qcrWisnTTYTffYEPAkRukHysrgGjr4ekmovqH5RG7ZvvFZxLLNhKSauK5",
  "key7": "3ncwv8XkYxpFbtX3TLanZoKKRvpVS1Qk9wVrp2zkFd3PWtgX4icWVEwnsHy2Tabyk9q2yn1fSy1DTRE1iVn4tNZ",
  "key8": "51TMnUfcH5i2vDVzqLAafE5nkKrZqJTKMVg1wBM8ZE92G6ZG2eX5T5kQ5ib714MvqEbZA4kTpNpCfEPkiTPBnS8H",
  "key9": "3f7ttQBdkvWTUJZmaeXLmqXSChAXvoyD1B5tarS3avyPXU5zgy33KskFyysPtuooY1rmP12QpH1jRk12kdoxQtzZ",
  "key10": "3DknSHFEv26V34HEBpobquiuKoy3qEMRkkYdLJvFKb8K8HkSyN7jR3zbWqfBsPybUzKKpMSiUSV2f8YTpdfMedFN",
  "key11": "3rrULAPw3C822dZttjCEGPpUStqhif9YBapNPzUMimGzcw3SoTocJrmWi1WAQmMoYzApxubghez1ip7PfRjePdPF",
  "key12": "GwpQ2ss4NW2uiY18BwSsJXF5KuZwsJn75hWZk42aWHeAKCzSKWzepdxAphvxPxQap7kXN2ZH9E5duQmJmSxJGwF",
  "key13": "x8jtsWnDfTw847kTL4Cw4kMKvN4sqa4FbrfQw82ddTph5orwqk1asfvFrZqgwgxk7bdN2xsz5oo2D5GZ39QRx9h",
  "key14": "5Axd8hfzQ1EqTasHhz2uZK9xkoJQuMSdyYxFypUbodhRpLSU9i765DaxbBzr4fsgHuWFbUAC5GySVCsJwZncvDo8",
  "key15": "5uUoDu9v5AbDsFJoUTHtyRUeVetERnUpcJHGw8d4LzXhtmPCN6vaKAf8XD1dhyzszLgv98ZCer5DzjHrKzbpyHPE",
  "key16": "2HyREsApF1Vrpxz1DjgMvnu6oSS5QoJtvoQyxe5zD6cgRp5hiYSJnDXDWjmNncN3yZS3rFPjb1bbP9ZL34ZDk5ue",
  "key17": "5mj9t7eBEkJ2nQHiPKyoyYVz5LZwkQ5z8Xq4USV5J499NmwCydKNBtL6EPeqC511Vr2rRe7VG94YdcjrrVsoq8Ko",
  "key18": "4DVyNsq6C6jttgXUCSUFpTuJwWDnkHpuHeHUipoNQtvXV8zYNnkGHsnY9LqfUvWo3Y2b6mkPBWXnLbZhvKs2LL2c",
  "key19": "6fJcV3Xmna2v2sAQx4TUCEBsoYz7yFEGEWyUDxotxw7K8MXbX1CKnRirwPwq3zZhePFUYh5JrMGbn2GLJhAKx1U",
  "key20": "4KDRu7xfVTAvnbiUL7h9Mueqbar4pirHBJp9w65gwoCMmpPdZXDrXAN6KANwe29rFcCpiHKEEUHuXHPJcTmhQ6eH",
  "key21": "3HzvDsLEunHUCULaX5gZTB926QHkbUKByj1D91GaZBEQr8AMupKGYFx79GLA6CaUqMkTLej5feqYNrJBaVFhMYAG",
  "key22": "5sUP17X1ZNYjxz498L1kbgWQoJ5LKF1eSaKoxVDLzN3aMMY4CEA1VQwK2gBur8Faa2wyTF635EDVjXRNokKcydBF",
  "key23": "4kmCGg9bpwfoh4ydErUTiwCA2Nwoenqw4yv31jXSTGesyPM66hNArcr1w1Sdjh4JQZ84EAQ1e7GaCZ3uVXpLRCU3",
  "key24": "4jMp3teVEUEsyFtDhxguBuSpDsyBVxnW7eKvmspWKerhdJsYkCCfunBSKNAHtWKR1ZiGyFyLCsRXRHEh6xvUyudK",
  "key25": "4NGRhcEV1AS1sXbBpZJCpcqxbYe8Sun5FcC7usR2q2kFR3whtXj1WQrtXeJ98oKSqwUoGxJBxnmAn2zMsBmkpa1i",
  "key26": "wSy3VaqcEuiYJwHDkyXPgpwALFbDPBNBERKbNdWQ6dhUV3RE1bmUDVxpNZjWomcsgmoQVGSwMpMD8QzdsgyNYcv"
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
