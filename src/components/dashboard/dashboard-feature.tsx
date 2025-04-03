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
    "4h4pCpm1rTUjwrsZRfjMGPq9kj4RZ2RcqsMt1pXcidRye56834PELJpSSsNUrDqzbPqDBPGomea7QYRHGR11SjbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q8n7ncMJrVJiJnGAQp46zzp2jCSMZkUKuTiL1zcfRfUZtRQ8y39CmaZN2RSHgzFmChtVxLXVLRcUTjZccUSMiCr",
  "key1": "36STHpzYxujBvx4BhcNxtpAbbUENYy7XnsYNUK1phgVgBxi69yXsLYRUyCmz8ksanysM8kJyk3SgNZs6TdsRURPW",
  "key2": "2bPDhV7gQx98ThncjvdHHJVm1upASecgRfoThxwoX5CHFzPpth3NUHdJWFWGcrSFaJDCUWCvHdoq81cHwpgCbqCh",
  "key3": "2sXvyoR9DjPTsNSsSKqVg95akjV6NfgkYY4Uo5HsgsNdUbdXJ1ThZHV3bdJ5kk3xxqzpxvjvxkNkSevYSV5n1wQq",
  "key4": "az7fHX4bfHHrzKMbHHt1TEf9gWrXwCirPgAutYebQtMo3pCJG6LVDRcyE5QkFHosQn8cHTNgu5CAPbBcvaJCsfG",
  "key5": "4WYrxT8vpdqS9b7HCaX8WjUeLfkb6QZsp9aj3yjrQaYeiBZYPpQ762Phdx4aQYMiPFUWgKjpW3tQ6jCEQjkyEynv",
  "key6": "3iRbRWts35vTW9rwf2DfLAbk3TSkJ1H59hZ1gqzcVZJcaQTuDhKDaE8jrTBpDDd6iwPMiazUokQB7aKJibp44Hbq",
  "key7": "R3uqEhg2DVhd52Xusa7mJPqRSEyKdeWfXDyJwv8MEEypJsDpQeaN5CNkwvsoRbsg1PK7ZSDD8TkMTFApLcjL6L5",
  "key8": "2gJ5kRBNApyHWzffxDVa8y9FVatE7cTNSRsWET4hJcoFjCuLixTJCPEJnm1uMxmXmLkNMaFaijYQvd8HRwpTDorq",
  "key9": "5mGPuafKHTT8AUnGsYLR9NS9BG94mSbK4T9LvitmmRLJiWLGt5EurX1m3mAgAeqKVbFp1NumUdHUL4HxMTETekM8",
  "key10": "qH37gFn3UDcEwiSWqjQqD81cSTjsKW1H9LVTTc1sPDCyEPPzYZYKxagxsoKgAmHWd1a6Jvy98rUzxtLQBZ1r4S6",
  "key11": "4a3UgXCY7UkXrkGAu6Zzssgq2k4yuNQWPApvTKGhzvQBJGHCbYjui4LXpyHPn9omdqvmwpguYWZ2PKt7nsWAmcRZ",
  "key12": "4KhXWYyAiHpgopN55nFYhSoqBWL24bf2zoHfqYDzpqN7oG5GFM9QukRfHviAwKAx9modeXt4TUfbjdYjfkspsaEy",
  "key13": "5G523VQNHAh7VEAeijW5BPrSsGaE1SNvGTFYWUFcixsLe6G61tUQDebXWWd2PDoZJJ46kn9Qf3dT3TjSvThvFPpA",
  "key14": "3hwzDJhKtK3dWLRXzYcqnJDiExgWHVXnk4uEVu1akhVjm9XuemDznnneaWbXFapB6bnmwPrZrJ661uTUpgQeg5Wa",
  "key15": "383sbkD2GPak1XEJnWuHJQ6tF1GGuzUoJWa8zsvCTdFebVHnuYN5TbV4HAg1NSWqEX7z3arCEYWxHJuiGWKdSbtk",
  "key16": "5mQtu8Uw9vuMyBPEknoc8YUFL7niRPudKLuTZxNAzCzT74LgaNYGxgmrzEQvbeBhyZ5VRaRYeTrfedfCj8ZP7R82",
  "key17": "5pNNFpQwBwouGmMJ8KdGiczmWcXq254zen732fYwsP27RDjiFEiiyiEfALWfMsACDrbYcZQB4tR8Auqfy6c2bURr",
  "key18": "Mg1vrvf4wPakroTtcMncawx6gvLAgpriyfDV89MyVJnUcFyVW1mG47QeSt2pvMti7Wx9ajaumHcj9PzVa3BSHvr",
  "key19": "5N7hfrMVwWR7tr11LKL8nDqU3cBJmA22QoQP1pYmPt2BCpFUhiVoSbsPuGEYieR3qpH1CkisDMoJKNRGqjjJa6Lj",
  "key20": "Wrg3wpb4Dt56YUy82ERbtXtRvG3X5NacNr9zNuQuXyFn5mrfYGeZxa923mjAHk1pzWrNd9qPuBvw7jra8u1Msz4",
  "key21": "2s7ZyiWqNJnYgBVzc799kuanjGFPXyyHgcL8NhQeyHUdxcAL3q8cpfCuFBMFv35pitBaW3LMEjZWXgk1qu9r44F6",
  "key22": "56BLS4GNNjNCTMbryVqTpcJanRtJXLRDqHnXGRCMYMeArUkT6krrRLiEaTqdKhvq6XdbbzTESxXVuo5Zaff6megE",
  "key23": "5eSZmKAcdPebRWt6bWLfK4sR4P9cFFJ3sNnx5iP4HJvRUbk3ESnhE8ysSpGxTfF8Y4nFSSmA3arQ5mWmdCZRfDDQ",
  "key24": "3qaU6FcCMSBt8WnDtWu9F1vUE3qf8zDogKMJhUNYxGXemYwQaNdJ1xcN17aDyBxgvyabeUcjjcSZ464F1SVFfTfx",
  "key25": "4LjayMqPUYoSox2SFqHuwX8CfHK1FcpnxiTKmC1DSzcjffRNQx4GT5RfAfrMHKw57HKC3EVn8sNtszL5f2ETNAHR",
  "key26": "3Pq7tyAvhjQrLS7KPVjX1Vt358N4RqDLmtYKCUHtG5iW8JG4gfyDGzLk8NzBXz6dDSuPfp8YYz9MzSBVGiSnSj9F",
  "key27": "2PkGroeUZJsfMP8YazXfkES34V6YcL1ro5ajzBYT1ai6Ec1Ad68m18xzSDvSUuF5h9nLrsU3ntPgxcu3F6rNo1oP",
  "key28": "3x8jaBYLaXwSEkQXPNSR1vNQMthtUEsbqdhZRRzfjyzRqA58fbW3ydRDnkWzhFhPmqH5KJNexkeM2txfderE1kA8",
  "key29": "257or1NJRiCEFrWzwnDJJ6ZC8uvmxi9x58rchYyRkfSaZv9yHK3fZ7aW1FrAmoWEH7sAswdkmz114ceocnf1siP9",
  "key30": "2V9ESpFQ81tzMpMJECMqhkHa4dnryJzRsmgBdDf3xb1t8emPvowwZMxdJyxEtiGN48sghWnH7ShdFsg7gANN8Wg5",
  "key31": "5BYDschSBRT2UMkG9qwDpJ5oDaGg2Ek79VVdwUJ4opS16pDES1LufUbeoNmkKsoZBn5xj7XYn3yfNRJ1dYWa4bWe",
  "key32": "2AdiZtRTJG7QFZDk69vr7GAintV1XZBxWdFBuCr2bzpZPD6GozBTfC4AqWvroQ34aGhUm2UsB2SLT4iHv8cYDjZ3",
  "key33": "2tVRova67J99FhVZ9469ikEd5MYxv6vZN6BHjdfaWskxvSoc6AMpfwFHCeFDpcqKpmBFgHNEevvH5zbF3QtcJ1Bd"
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
