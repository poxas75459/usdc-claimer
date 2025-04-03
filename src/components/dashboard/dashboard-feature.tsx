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
    "3os6Rwzx3jDZZDgaG5FenkeKERWAEPVC9mgy44WXy635ar4Txtn4vScJnjYoh5YfsWau8B3dgdD7Eu6McGPnxAAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fBz4c5BAEPdpUXqK5cnpoaabj1ncNE6MAPBp7SyzM9uwU9w5g7445RuJwLiNh8NSaDfw4KuNox7c1pMx7CeZ7NL",
  "key1": "bBwLoqWGLaDo8qyxyUc4Foi747j6Kzu3jb7bpY7os9v1dE4v72ZqAeuCrZYHN2sFi2ugRgcPcVAnQMTvxLctCZX",
  "key2": "5JgAGhrEYoiTY65QkUdpmUfFBtJ6T72VVH7txeRK7ki3eQBzqSEQtGT6wcoKeLjHEXosSCPWDcX8xEDUd9e32vT3",
  "key3": "5aH7Cag37Lo48raqNfCfow3KsjvDoSMsT3XW4cCeH2onEb93Cq1sUihhjLYTYCEbJg9FSf82uqnpUxGVc38E35tN",
  "key4": "5CEQScNtyrsiw6BRYskRzfHLsVWHdAChmBiHP2vLRTS4pTos6YW1j632Eda7HA3EnQqjJWZejEKZ7t2n5hWZmkvk",
  "key5": "27rfdXShCs64qqMct5Kf9StTPGEqga45v18ZkR2yz3rd8kGHdUFtCs7o8DWTPXYWv9tPFQbv4Wrb78Sv6APP6jAf",
  "key6": "3UghLiPoL1fJgzuqZKs3BHtdMDVRZae3gqUVEBEDJm4ij4XWKxjmvYovmY1inH98Adc6aVzFHcWb5jf6qS1E4f6X",
  "key7": "4NVvstmGe84hR6fY2iqxMM4FEqHJy7oB2aFhiSuHp81pzoNnC6WPZXsXCp7tsQ5Qk2VDo8CqpF6tdHdefByq4Fyt",
  "key8": "2JqD7KjYkF7WsYtpMkhhtRM6PmX4i5hd8MG6YUjRFA632AkoqLd6zudDG2hHgCuYADpvB7bjk75Y1dMteCRqqbj3",
  "key9": "3pkan2eCEgbJwjpqdmDzibgJkPrYXKALzKtqxUFKo6ECgVweyVcoyTiLnMnogudYsFVzj2Y1tDVjAJSQzruaRhjZ",
  "key10": "24XwkDxPnVcetMnL2RQwdEXn89Neh14DaMpUQvYg4RSSAf1xmRNTj6BmEZJgZbrrJCZigGq8rb6k22pZQBpvDpMG",
  "key11": "57iybKLxubu7p5LkkzDfQvt1hfr5i9qXtCfKxTnCYeEY5qA3UDWoLqXd5kQGd7bdyPX91njoVCb2iPeZhBXvEVYg",
  "key12": "5GwYKYnnj7ZWAKRJeFHV8C5ZFoMicsQiowBBwBwFyTaM9W32doCeY8PkLzCyWFYbmYUM6wrPS7fthVCAVrkjx4TA",
  "key13": "QS7DvRJX1GKPEVTbY2v4PbdVHdJSP1CYG6gJKPDNouYPH5D9t26igskx2g5aKK5cmWxgAfN56gcRP58j7HJzA3o",
  "key14": "4njGFs7sBjC9iLhRHPL9iZB2PBzDDVnMT6PyNeNFv27ihLmGvQ4Tc1DzXmApERmBfdUajj7VDd3f4Kdxsinp1yxk",
  "key15": "2VjtFreiNaKwh1TnmhCL41kUx3hw6cVQN9PKL2Yjub8GfRv4w1GRPA1FwLmbZpdMZEQLKv7PwXVVwVVfuULSK4BP",
  "key16": "65b2VvfqEoAfunuRYT63HwZhMLGVfVKXzSPHtxVmZr7EPhfqJGKcx1AKLxf6qjB2TiczsRqqqK4P2SxDaMfLRpBd",
  "key17": "4eFpA1cmVvnSsPq7B9mouXGCH6XYysEp4UUAFmRFxxngEmHnWGBobt5wjTA4drBPKYtsNtDdFhupMnoT9RvgFUgi",
  "key18": "4FG7tepXp6uGRqCWwBVWTDmVugw5jrSrr43mrfDN7RbLeUQbxaHFsZGkGiRymCVPAheSr63hNfnz84jgGFHNcKHz",
  "key19": "5eWbGH2oCE8FSrz1WuU1wXhoZKrz91M1eZbuckrk32CU1Frxn4KAmfbbXPGZPYdCtuxFQPUNGaUwMfgnfjnukm6R",
  "key20": "35H5y1EyYWZhg2oR21qM9DNf2x9aR7YLsVMz8XcZiCG8i5UCquhS9y1xf17dtjSYSAjbixxRbHJhEK8NkHYu1G4E",
  "key21": "5mrmjrS7aoUAqKqakNyJzDPB5WZi9PCMsvo8XdDHgkDLQ72VFce3ML5p97wai2JmdZAWkxG8vbDHjUG6azoTRYZ4",
  "key22": "4bRfpj1ocB616cdSissPS1pbdFDrGB9awUPwjVgFxP1oKrLfgngm49MtBfSMiFSbyKRPYLx6MTbqRJcDrLho7RfG",
  "key23": "4SUvijakzjBYuDJUpeC9YTFHL1KHJ6kXFAoMYLaNTEfX6ctzAGymXfUvWbdqJFg4mkNDG23Cbzjj4s7ouy2ksZSY",
  "key24": "2fvUzH1UaBqCs5cRdQpLkN1ZNtz4byv94pZGoiHu9HN1UZQ2kuSFqhBzPt1CsRm5PwbZrfcNkZirXSeYcJC7WpRe",
  "key25": "33jJxDYo4n8iNoTqi1NEykXQcUvUV1A4oTokXQLxYFHQ7y4NR4dMvEJGn48KjZNFhxpJ42MGz1FEjgnUYWarUBbx",
  "key26": "3mHuFY4Mk74pEegf5cc3CmD1deeAf42JoQsBLgeEoGm2ipDCUTXSWJ54JHRjK1LdYWvSK8SHJyQYSgHCjkeH84i",
  "key27": "4u5PacfXRyos3LDaVGX4aYu52nXArfHjTnupy4Thq4NcCvNNQaDVuh75Y8HcZyYrePcqfppBC6GhgyUTuGHerYoE",
  "key28": "eyBDsQhvRgsXUYqnAFhKZktuDsRmF7k6NBwU5bjFMGjcoMc4JuXNkKNaJrYmgnZHEFdfj1rgNnxZtjfqH1AmK5A"
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
