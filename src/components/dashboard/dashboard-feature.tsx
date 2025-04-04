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
    "5zUjd6vWeQReXC2PwggsB5iinr9LqZCuoxfKVi9Zf6UnBAJ4aED1KRh7kXDH7CoexoNHF17ikXDB7k1Dp5LqhVrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S82DhGLfr1Mdbgddrp88R4mQfbyzq1FUcpWHbR4v5PtFVHkNy767V6W6Gn5C4RUuRm6KXmBCDXrmpsSRoSjSHkz",
  "key1": "5K7Phy4Wx3ThwtqUMXoZRsk7rxxgP4yJ8tbKBMkWqScAnKkNr24J53XgkRqEFcgAGUpSiT4EFQ1QfdrEBf4kjdmJ",
  "key2": "5Mi4LSFaPG8D7kn1TJgBFQtZHwF595VLNYRtfim4xpWfVqQbERvkRUht8BvBqrhvAb4QUjqRADHn62dZEzMnjEiv",
  "key3": "5CpNTk1jXYb5AiUhJCENh9YZLhiceYTLyVamwvDppGkzaJrUufCkvNNqDmfnFy5fe4uCebAksBSpLaLsoR6iBJp2",
  "key4": "4BLjFtsg7isuiVoPNhTQyjawiLxUREFDwm5eybBgaDnJBzLyQD9qCzeDqojXpbggpTvdeqRvVbB4oDjSqe3wxhBK",
  "key5": "2LR75LWUwXtbX7dtutREDjWvUBQtX9s1JVi858nCoyBVR3uERZBE8DF1V4whak8M5cKFqz3YdYk5B9ZUpLoi9CJL",
  "key6": "49VDKcjJHQkwJZ2eynKTAixfUe8oUBR3uTGoiL9oM8Xx6A6pQNQVm7nAVJyPnTKpcwJ7i11xGGsfhFEHyEAeRbbw",
  "key7": "2GStCnnUZyq7c1fJVHcUQU7gSBSQRxJbsAsNXZoB93gZKGSEds3wUmH1aax7b1eVBeNLijTMKtdCwRSeQ2qNKwn3",
  "key8": "5qmqSuEvc6zWEa4wsNkMwiAtvwsueMiFGvsAqkcsBFXKQnNmS9y9gupTk9WW9n88AefeWTVLKQNaXxqC1hECgaef",
  "key9": "4Gx17zP8E3H9cxrHjnTEDRdgPWSds8LNKyfbfMX3eRscBKWMUfKRVmoDV2aS9dUXRf3NiChdgcTToujaRtwgH8en",
  "key10": "2jqS4q2SXMw6YgCHPuKhyeNdBnFAFDzH6aRGDoytSLKyu7C66fhp9GcuJ5t4PwtfHrAB7MDi2Qbn1qgphSMa43Uo",
  "key11": "3hZ4gMz54XyKcWwLJGbCWciNDaUjCQ5VcGnWL17JUCbYsdKdELNibMHn31AMLiqBTvhuy1gyahfXoHX5h9VkG9XU",
  "key12": "3FK4RDEuzUGsLSDfZgZD4uFW5HZFpY3cdfzJwMuigkAnJ5aYCGB9oMoAFNfBbbkXpw5wx6vfWkJCnnzdgE27mTbr",
  "key13": "Mga85pUsfWCxyWLfJq2ectDHbZXWfEKZSng4g9oke29yYs58rhST3kPjuy4tA3uWucPs5RCeVuMF9TYwAvLv7jJ",
  "key14": "59eCmrTUBMLCtmFtaNZrLYqjim88XipnyvkHNRtmmJFbajoerLLonkhyvu6vQKL6V2iRkpXYh2EPr6iEUWTAw3Mf",
  "key15": "327qxVPo33iJFsMKMwa3qFWLkQdsygRL8Jpo76f6Nkoga2tptuESR3s4wb412pRZo528EBsuyvGftWGyKvcmvUNj",
  "key16": "45GWJ7LbEUNrcgeVwRL8kaBDtJk8257tuPXLz9H7BshcC4qvaNM5VTZaMhhPCWfhaJKbX1xs3gfTpeJ9e9Qigwn4",
  "key17": "35gGjkmzSrfePyHjjQbjNvaF2KeEQRvXzNupMVws44SBk1ACLbe6PSdtp9246YSB9QcYAL5fd78VTH9NCwPJmVuQ",
  "key18": "5zo1xaXUJ9eUEUcRQqQdYAwEk6MdbHCbX5aCT6K5qENk4WyJs1vLTUNhcENXzUPbjJKm8sfkuQDrZsASE9t4SmLA",
  "key19": "5Mkw1WDErfcJ387bZTBbaJFtm9eMxmT1NoJTtXvdt3DsWGkoBNDnjhEKCgMJwgoTvEZwkVTL4QVdHpscJFWmX5Fg",
  "key20": "z4G72cAcn6D6UXFUkWwZi8cuzp8iDm1ZqbdPpLXAuidJqTNCibHJvJvvGyMKRiUL4Jvy5KGuhoSyN6cm73s6Du9",
  "key21": "5mtrSxgSurwCxSByq93FyeGrCmSiRC2ARhZNJkemtcA2CMeJYUBvr8LrrirSyguZBoKm79YK8s3DcHz4DfFsARaP",
  "key22": "5XyYmyEgxWpA24a4TGjnhenCVjHcENKHDYPJVFcxDmdVEekQFQQv7bR4hj2uPPayKHSgyVsWZNpLNY8S3ZJZgC3U",
  "key23": "3YzDeQ9UeQysFzBLSV1u4nwuhaJedZYZXDcdeRwkkarcAuenCTGjazbmgpY4PgA8vA4aRkUbnZB6TLV37e5cFXyt",
  "key24": "4jz3X56chVJ8FwSJUBzoVkHErS86FpjBJZkYgbbTKZdN8YSZsuh5MReib7VM4oqHs2c96DrFH1SEXTs51vsAMsw2",
  "key25": "3wspfHhpLtuXCu5t5SiPg38CLg9i4X79nnXrTondhnPKYcU1CFKThtW47aF92tkMHZCHv3YcxZoqRESYRvb5PBD9",
  "key26": "5CHFBQXQDUxFh8pyYtT7EHLvFzhpkBasqbuqiUxTHMXXG7UfGgJpvpWLizSdERDYaVcsGz7VuTmrYXg1B5zruDtD",
  "key27": "2VNGmKCN7Ng2TiaTfC5S3uYNUW9hEEoRycVqx63CSPxPcQTVLnkKfHXg8FnQ3CXArebc75uTSfqz4DfXDxSyBrQR",
  "key28": "4YqB4DJJBgLFybjCSBMRZ2ERn7Xs8WSfz7pgbY6SrVtboKfk9vyyXs4NcpG9Medshzed5XZAzKF45uRiQGLPT8Mu",
  "key29": "5XFrXa7bS58b9mAFd98Hzy9dpASvxni8RwfTogVbx8pmcgcXPrL1hYPGks2vQoyhjb355343JNvZ8avgyuuQYPFE",
  "key30": "45Jr6N1mtvRnTQWHPw65H8RCPiYeHkAuPWPM6unvsEHcJM5U524sLe6pajCboBoYtrXug42BDP95hUzQZ9pnji5q",
  "key31": "5NCH2GXu2R75CFZf6nopr3egiyCfSonRsmksFxHorGHDsKsTU2okUSEu1V3gNeCZHLypCQpV5HxxZrSjcxGYT1WT"
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
