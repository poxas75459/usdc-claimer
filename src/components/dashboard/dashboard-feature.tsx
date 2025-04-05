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
    "mYVoo3yt6gTWv6JT7houk9zfG13JfLS9V5ehS7uTnySUxeBD1LrUXJTYkBtLSKLfYZvHiTvsH8haUZMcJP3WUD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "218HjHQVMafGL9jPCHXer8PRDzyLPUpHLceUkWmMGFzgLEYde5kVy2CkL8cX4QREu8zAFXTxsj4maCGac6ihGzWA",
  "key1": "RaYQqSHfVtEMDrHDy9e62TMhkTy5jQcKMLHiKiNNEg9yt7cuZ4ESMuj1nq7BKvGUtGfW7WqmWDjuVTYVRHRQJeA",
  "key2": "XcHeKN75SJ5KgQUfLTMkLoVYGRSugWZ4iK2XDE6zcmdRTQiDtSq7T4iXBdchFoy6tCXHfXBmCZArxYSWZUWos1M",
  "key3": "3xkJ7QdSjHs3rFcxvkFx6mYzAuWp6ec3hhySQ6x14jccaRinZ27gQ7t64JAN9NDNVZ1e89aLkj4n1nc3MchjoU1r",
  "key4": "5LUM16PDKhutpfnTg1FtH9bfyAo7ySEx3BXeWsUSUV6MKxoSsR34KrZ7jJxopJWRKKQYm3H44hpme68vsprFsUKq",
  "key5": "5WinMKLMSNiEgjFB2vph5tRzcJDQcuaXp2sRfztPqtmPd83YEESyGsq3V9fozwqUfGGCwNMCTTY1JFuxAAg7LNZc",
  "key6": "45aAP5iQviiNRxYAdyJnEbJ6wFppdzdFVnfeeqBdmq8cp1oppWbp4fKkq3ByGY2CUkiaPtZrLpByyBiUuqJUb7oU",
  "key7": "22rXJ4ndRA41aiQraL4NUNKh1jCRQAywPSYLUQMkhtXv4it2THmdNhMqtp6c7x1gNb7wNx77JzMxkXng4UafK7dd",
  "key8": "T8tZW6piqrZPnb948uPzLVAjWNZ6GvqeQvXBoSgCuKip94F4pth3BMmsYMcXtf4eEErem8u42fzcriwzhNdPFib",
  "key9": "3RXdB4JagWNfjb3T8SCUpd7mGaUgfSRDgb2vE5bXyKqcod6o6qHeSP39456iMD2nFhUkePn3TqsniTy243xYzkwA",
  "key10": "55pa58AbQCbjQ6UKYvFPNjU3fdoYt8ajU2jvaAT1WqbX8ceHSJw4NjqnDuPDAiP9eYXQkkcpmhiujMRvmX8iPXZ1",
  "key11": "4LnvFMNY9phrZZpG9QTUtNey2E4a86y6NPrYNotRozw8nBdoKFcXK2QpGCXT39zSDKYaV3avjDga21gkCxTf7EZz",
  "key12": "mzgexCHHwa9Z2dmaxjnXstRPrdvSa2usAm1hdTC4SvtBJPg3UWVNR9CiAF4Nkebx8sajMuu55CiQcW5TZtx3YVD",
  "key13": "tq1TTUfrZoDfnfEhrjESU3VEeuJAeoqj2RhfEQGLvNRKFJ5Cpvn9zxBeNfEHPLR1Dy6yvWW31gP38vedL3sGNbT",
  "key14": "5edjPg8ZqVLtD79HBSxrnpgN2qvk4rxFS6m4MgWY64VBtGuvVGLS6nauMBjskgg3Rf8HHoJAWLdVusiAJTTg9TKM",
  "key15": "5cU795yRpHnDic8Ww2uBGo5B4jEkswHXDyvc2FmuLGodeVryzkBauB12LSE6j7ohWtzVpjNUAaeWRDw6HCVybdLc",
  "key16": "4my7hvvsQKAM3YvTSQ49hegBBHeZNyZVhfXK9GHsTyL5uSQwd7At1GMaKYfsotRVLoix8msJCWx33r7X3wQKgHyd",
  "key17": "5HDHvnAABKidAjcWj5n2fgPyz1PZWfz5RgMMD9aMViaGXRW4KDmzPFpTrNZsVcqDwhZYf3v8Hvt8tsqGaxbNCVBs",
  "key18": "2qQNitnySZNzTDzVbv83oD2UDRBQPZDSyvBaRMPVgaHyZTTwakvPLJqtnGDabdCLGg3ymkbDAX5jaJQWVYcp1vsw",
  "key19": "56ucrntKbHN8yPHQsYTDnaGJXsVSwbVnMaDGRB3bguY1CXdKP1zy2BGyxrVPD89ASLS5sSqAi1LJvZWqnJ1t6mAw",
  "key20": "3W3B7ER9aPEUHq3eyRFtEfeK4dMpW5Xk6smTMGirums7G2t1r29GhGFsCFurpvnYHPQP4CayPneE96c6LoK8PVUg",
  "key21": "5T4GjtYyqCtDY6ktUbADMAYncaQhHWyHukc6eawv6MkEKFuH2kLJ3Qy2ktv7Sz832LFAFHdqBTBciTakf879MnwR",
  "key22": "33gQAni27ow1QLuYYJV7yzCHBUiAzMwmU7Sh5jB52XebWzTuDQCQV1EHUZMpmMDS7zv6HsVw3XXV3wAXFZeVkDWx",
  "key23": "2fzCN3BSZNiEmiSLRrTm656GYMkMmDC3HvLhLBY3D22wyBCbSBMQ4dyQJ5M7bcbkCMDEk5eMvSY5Y6KTj5jDnZMK",
  "key24": "3DyVCn8MKzRnFNUMMLX3cQvZiQomobqXF1vEepdk9JzHBeQ2wiiGXx6qLfURTkVRgUFmbHXKqn5YsNkAnHuGi4b2",
  "key25": "Gvb5RowNJX9PP4YLwc2pfPXRLGYqcJR2h3C4ccRwnPYpSGuxGrPLpKWRK84p2jrSgUusFEXCJzwE9k6gQiJdYwd",
  "key26": "52W524HyynHj4qToZrCmEVAjKYMtH3QFDPN4WAW8a8Jv8mwwzVUWWdJannSHVgvddqTR37uLBXujVgb5cg7Dh7xN",
  "key27": "SyV93EH52Qi1Kzn6hUCckXSXWPrBTShoeB59oFQjmXmtwtVBVDR6gWcTuDnQsU3dBnWA1vYqMj87xSsZcdtD2BZ",
  "key28": "2PbWf3RhqqB2sGCiEUEa64mxkgbnozmHyrWDpvY3qfn7irPEXS6nKmyPGzV8F2VfRj3e8VrWJqfTbzSrf4Za1Lyd",
  "key29": "39khdWnHqAiG9Yz4jR9AcAV5NjbXPeR48oSpAFx7wRN2Y2JgDk1DaYMEXgLd7eQMv1bf2xijdmp6qp8po4eLfzzs",
  "key30": "5Nh7BLtQ8uPnWqRUSsSH72rE2PmUriF9BJk7g1ssaj5DxVCRXkMhRKmfzj4Mmx8D4cCJAUNV239HHXKxgQm4Tpsq",
  "key31": "2CrVmufhSRrwxy9QWgKG22kn7knjXj4ddqFFSy4a5vEwADBtuXdxFqZU12tTDJ2voxHsnSHVwDtsjVvw2wNfJmbT",
  "key32": "PUzg8WTjB9ud6KNun2NrJUxUnBKEUKkZ5FnDHkho3FA3r2bBs7BXnPntnqekiWTSaZM3zhBqD3kWGrJfbuTkvfm",
  "key33": "4CybbADETPfpSYToJKtsFKEHCts88NPpAtxb1J3TEtVDDKAx94BEsB7DeAW6TcNuKoJaKHS3pD4jdyhYHXQbFSt5",
  "key34": "23QoBMhtUqh5tXzupUR39zuaMJqWrHWS8vF3n3RSxCAGGYfGvdox3FWLJ2kV7xCmSfhsrjsGBusksgXtAQu1zxZn",
  "key35": "4LvX23Nt8nzaFzfzY5Cs6CKr7vbVKhVmqNf63a9J5UiWLaUYZDFzs5XB1N7bprEYjv7UrsBWycJTkJ1nHsZ5h6xn",
  "key36": "4NV9VPEwg6Hgma4t1h6t9W8bDnys4XF48Q1KwSLWVN6yP2hYu2upSdTnBKkqPoyJ5nP6g8hr89BzNVTZSqpeztoo",
  "key37": "3ojCQF7Txm9DeuLti4xjCQ9fZo8EmdLiPx6kcevNKNLVatFdEeHJBepgihgpjFA6hb96W5EAFkQf216jNjNW27HP",
  "key38": "62RU5P65NrJjPWkdrqh6MmGV8ppKbkXanFWi8PkH21A5vat6jPCmXEa2dzc3nSy33PGDkq3rDnXDcv52aUpahfEm",
  "key39": "2nGb5JNU7TeoKkZnvp4ozy5y9jZ2Qu4Z5DAtbkyHjtbFRfqWw8dvxuFsUWXcckyzK4A9zuZ546fnRzUA1ZhXVst6",
  "key40": "4nUzHd1gDUX73jjJjXEHBdp1EKpFMvfiHfEzwjsMj7MVW4PJXUxdPsaW1nRYdoHpWwaDkFPpdaUYudL9j5eJ2dut",
  "key41": "3mSRk4fsp4mDe1cbcaNxMXz9AmRrs7iegLEtyMHpC6hZeiNRiV8JetQXtzGgnbCbqTxjQtG1bdBMexPLPm768iXA",
  "key42": "2eGuUus8EkU214DEVvPDe73fst7MRjxXPiRHFekXUQqRqeJkv9TS469h6koZQbW61CtSB4LAA6GcTgk8Ug46DGtH",
  "key43": "63SMhf33ryJxYTKHPTpr4BV3SrKNdy838iUH75oNwSSbJCpRzWXUyUiscQgPqvDTxPySivK9qUCxASQMyLvpnpss",
  "key44": "51daEgWrZ9R9J49PLPXK6dZBNhQ4xoSpafpaapiN2NCauapajrv6VSVDe8Szt19C2t3dRZnzRFf8Gdap2uPWJ3iU"
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
