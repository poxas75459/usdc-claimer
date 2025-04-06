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
    "2r7KVaEYxHE6DawM7EbE7TT1b7v5ciFVhv6i2Le97UdiiWN4PoeKwoKoaZh9kt24wtUfSHNXLhzLzpQPcyVPZazw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22oxkNYUKEGvXJWWbXNHgdSRiahL86dwzJ8hqiyyXERyWUP8panfcnEPNFQUcSqMggApQsVktQHzav3C2mzs38dL",
  "key1": "5j9Pf4pfRMSgeFBfXbTCMUthSMKqZRrcwAo9AjD9V51obF3wug7xtRjV8tupK4APgpZC4RTdEqggpWWYWKgmpMuK",
  "key2": "2yMpaSymrovVyPQmufZrx7CU14vmVwtEGeh1QKRW11iKCppqkcNjf1TRKNMozYMpXqd7F6o97poUiW8cAMDezvdc",
  "key3": "6kN4zPSkT2CCrJmLzs2JP9K7kTCaKp91tYMsPKLectL27NFhoN8XyWH9o5koKKsnQG8MokQYZj3tx69C4ZdtvFq",
  "key4": "4tqHBC2uss2WVuAPhYCWo5f6yNeCJhLmfG84W524Rf5ogVSnZ6jZMiZQXQwkZTBwHNgCuqZZGnWodZpVrNdzxgym",
  "key5": "4UXe7Giwnz7hHSNnZDSQLip7n9Rp4ByTz3eoB4psMSjcthzCpgaiikzcgXKikJ1DBvgiBs2Qzd2McXwCTk4jmgoM",
  "key6": "2MT8aG3gSMr4ib61tTFQs8Au8qgrjLm6W6C7PMjBe5SjUyT72Co4swsUKaBKRj9Ayg6f5oarKymRyxix3L6ARoai",
  "key7": "2vQKFXqnvz9sjxVP63Yw7t36zFVcMunF1KyNQM97dfKqXwc15RPe7QJEHKLgJFcrjgNRTxoVNKhkdQ4rth6jSDsY",
  "key8": "2i5tGygVp2aUgwUkgBj63KukyQpibB5wK4gkobaY61Nfuga4jAELqGHsVNARyAF8NebHfvDsTpKFhfaGPDVFWjwy",
  "key9": "zYNkREzri6xTogL2iLhCRj72DD4HGSJa1rsruy7Wa91jxMGhNhQFE99J6DBLEJz4FSyn2evcVRQ8SgvS6HPsZ9C",
  "key10": "2oXMNt8h8BWtt2wKKKD5NZjzWMxr6DJcgum4PwWrQL8uqNPUbYN2p51DwXhAPjpTuUGfmcwmVHj3tYAGbFtM3geF",
  "key11": "2xtLUmfvJRVBH3DXLo1XwL1hFTpMWseLjBDL9p2DyCmxb7vJYtc4zASSNovQvfgUFYjaYs2LAhs1WPC1CFuahRNN",
  "key12": "pDuWA1F219gMbHsgkv9S759DbW9MFiq8XSbCGQFMtfs34ZjJDHE4rjvmT4Pwkvhw52hv4GBxmB66n3tHDrTEsYB",
  "key13": "zzSStD6UXkYQGBF1JMaGMXZ9G7NHecJ7iWzsrVEw3uTNuoyAs2JePjpL6Axdm1hdPmd3cP36ci2KJiKnNgJGh3r",
  "key14": "2fuZ5A8tRtrVKzcuiL5j17A8ji3FUSsKT4pTZygiZCDX5fhEc5WvuuuEFNqshSse5AmXLFFzcZK4j4S449BtbL2q",
  "key15": "3pGrGbLuf8vTjLcSW9GM1GeKdQWfu4HH3jBxAztfdwrbWWm9j8m3J7SJyUVyzcH6932wS7Lpw3NmHA7BgGkwUTp",
  "key16": "34KWDZDEA5AXB2DK7NHhmNgW731sonGeVGg39Xfo5ci3YdTKP1GyGTNwestvhLQsAt92XKLSqKERc7kbHvaYuKcQ",
  "key17": "2wVhYAJNrC65bDbBi2ZUSu69av8wM8Q4iwfxh5FUjU1roiufAfUcc19BUAksuJpHPKKyHSbLVR9WiuWCzkRu4eLX",
  "key18": "3bnsd4rvwFcAxnwE9Rs1679yaC1zPoJb8rXmxZ1UaxN4H5i4auKBpK8iziHYGF8eEv68S6CieWj7ar7iVMdhR492",
  "key19": "3ddaJw3WtXwAypbC6imnR9xJmfHypZpYpt93ZmaSTUxmveTSfd4s2eCn2f3wrmp3PBmEJ3MENC1Dt3Cbkeat9Kdk",
  "key20": "3tTWJpGmKmnF4HbPxHCVTPR6YDSjUYFWQ9yE3QCSRtLL2HVT9j99UeM91dAAFsmifszeHCRZPZ5jMLY9KqF5ru87",
  "key21": "2FqcJYhGZVR1AgudiNo7hnqRUuzDCXfm4MV5a3YwS4NdoKrzuQ8JuapeprjWdGFtMqMS7UCgXt6pS1ySdP6zRaQG",
  "key22": "2mEePfN16wYTdLoXH9dBbmR2EyDSY6p5scoUYPei8iCSmtyDA9Qticg1xvkGnKEQq3fw7ATd3yfixkJmGLKrejo7",
  "key23": "FLXrJLraP1vguT3trC1mAH1sZLjXeuH2fk8hCioTMUk7EL5P3cjXofBQSSKAQ99vAPYJJkbWzSA2hV3uumGyBDZ",
  "key24": "4CSRxTgCTEA3fm8ufKtSfYfmAeAFk8vpManTdeht6bRjbQsce7boBqg28eWJUjN7ce6H3q1bLAU2cinMJQKk7ZwF",
  "key25": "3rq1FZA4RstzQzuzt7qwhPMjLf76wahqHC3dHB3DnvvH9igyrsjUCExKnys9QboDP5gKX19GRVas94sVVZ9PLori",
  "key26": "2raANYC5ypnyXZ1CdkMEaNrJ9R4Ucm8f2qsQYHX51FjsBEd3uYwBssbzLikztLEXyq53u7LBPQLnDuArJVpRVz6d",
  "key27": "2AU6F87eu9b8kD2MnwhGE26JdMauNPAmXe7csraeWXEYR5h3WAuJKR4fexcVJQ7mKCTtxvDe5hPav4hzYNJnR48L"
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
