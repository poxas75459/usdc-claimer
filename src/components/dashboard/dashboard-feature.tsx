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
    "2junqo1qFf3fVLocitezgnpkEtnBPNui1DPWMr6CaCdiyC2pbX4iwTEwGV2cSnqrhftAfqG4qrFefexqR3iqMcRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HfwMtcUgfG2QRXreqvzB85PVfTWyQgRmPosvTP655tQg5EicRqSdzX49WpfeMXkzMLGSiqR5CZA1USsarEiFud2",
  "key1": "26L4pCcLBEazUvEKK2nfvUSGkFUbfzcACrqe14d4ey1eoZHcqkLiJwiiGNuyRFFPoVoKYxVNKRTAe9vRAG1jK8WZ",
  "key2": "56uQvJDPGy8KGZsixzJ8HxJkNMsBjwzMvDtX5pCfFufBybN7nLeBizS2Mm2FudSiEJLRdrgaGxX1N4rrYpqN9eM5",
  "key3": "DmaKMib5RtBwMURYxexdvxkYbRHhxqkPePYTj87HrySE7FRbbxVKqMZaFp2f4wCr6NSjXLJs8w65X68wHnFghBT",
  "key4": "3SJMWd7HgF5nmEjFgi3vDaJnhQHf9kPtBfJucxrudf3D2HbDEokD5qtgS8vJhRkxvfYnQhfzCfUDSZg89v1HXJ8K",
  "key5": "56NhK9fdcUEaFETf2Ck9YP1MZSntKVfqnTRmDzusjxX2LdZa4NzA8Y2SBFrU8qmtgjnghSFSj9qw4tuDB3i42d8o",
  "key6": "36HZx1BywQ28Ebn986p25Kpu2uJbVhHCgvvo49Hin8vtMbUPpXbLXHfB3YU5PuHYKTbrZopaeeVJGLGfAN8mxWXw",
  "key7": "5Q4HhTxsvagU4LUY9GwsA7aaZnrzACLALvTcwvep7LvZNZesxNH3ctJ7fkryrpjsv9ntEuLYHaaHCgquNB6vRzXD",
  "key8": "4SgfjG767PMnL5ewoDuE4F79CezPvq4imc44Aw5sXMvmcRJ6kWUR3oHH2Ch3AeDh3rJtXB3AsFdCkrjc8aVNagpX",
  "key9": "8vNmhNbqySn5HjUMJbRzptmURchWT1GWqASTT68RMcyVwzPBbZgstkbJPrGccGqFLoPgrjmfUvsjj2ct34D9YrE",
  "key10": "5YRFZ6xexCGLLvjNTFrciWaAnsa4SBxMUYrdSbN7WF37d8dfhQfm4sxi68m1asXEbMGxTDpivir4wGwsyU8znPRN",
  "key11": "2FdLpcAGH3M8aeN1jZhvfur5cUafNJoTgJvXGy4HeyWuDiwX4fe2BtJcuKBGzX39peiJBcnTPP72SkGSPru4qaDP",
  "key12": "5PWXwW4MyV1j3ev8QMfvpyBeWatjdqpqxTsL8DZ6hE5WwREbvA4imvTD7ewMtVfueh3dDCDfy2GUGGgfH2f6y9CX",
  "key13": "5MnZZBL8Pup2HkLc1Mk8FnyKKiAuCkVCtXVCnKN7LRPJnxdb6mEPg3wbuSo4YaXf7C8pVa6kE5n21pWf61BGtX7Y",
  "key14": "y3K9Z3FggfpuBLwNpFfxoSQrW8uZoSdegMMEf1SWqG8Qtfs43Uu3oLS5jSekyt8vQBQH7vp1vh2aL3swm631YHL",
  "key15": "2FLsuXNvo6PUuauuFHis84ma9gQXfqWhnQrc26KQSGbizBW2BMeJLQdB4bNziABpZtpWy46BsWAm9xevLJ1RzKga",
  "key16": "2WqfPLNynDFrZ8GEoc4a6Vxsr3scv4Mn7dF3kCgsoDoJbS7o69npw3i7vEtQtYcfoTPnMC2sPYeSXew4BE9TsxS4",
  "key17": "2BGRGzwV8i3WUeQP6e43A4f8JijFc65a9jzjLEeQa279HZghaAHpXZ2SZYuBH9zNHXoyVNeutb6dNyQindb1MG56",
  "key18": "4vs5sFmyVMiJXN9JJV5RoACjjcgGDe7oxCqDcr1YoQ5edMswyQfJKb64r2PUxXTeWrTpT6NGhyKWTUkgZtGC7L9T",
  "key19": "3KyGFREkDT1TCht5Rg9ptS6e7UU5xaYn63Nojei4umgrvrtXwGwdNYryL3x2MmqxvBAzmxtBybsC8ydh2F1oVwT2",
  "key20": "3DH3wTtzdXwTxV4qnpYeCky6DLFxkF62VCA5h8HzVyPyToP4oFU1cFKRfceKKHceXu4BeU91waECX4DNFomQP11j",
  "key21": "4MsoVB2UhW5FmqVqZ7KRen7bLD8PjwTcKkwKNAMYK7GaDdrLiqSTWDMUfN5Q1mw9XswFK6BAdNVScCEPWzgEov9h",
  "key22": "qDU6UgYbT83iZPU7iSAoEubr2KEYh18WK6zsGCvLmsEh9K7b23Ft1Nza95ABertrCS6KD2qGgmM7wUqccCpe7cd",
  "key23": "2kXxgwjiw1PEdgKRn7X8RuQuoGuGzN4Hcomv8WDPUhNuzhwaCRLM6sHXHfk81xTWsEgbjYFs5R49XwSuYyVTDzZM",
  "key24": "2Jq5GzYuoyF3iXttEvXDdxPbHXwE1FLrDPtw8s8TVYgRQVuCp2EBg4jrcND3UsBXeoaVrXrMuYghLfs8BrYVKLxu",
  "key25": "2makfZ5HsUnFG8Sw11aWjgKMyAgr4ZZMkFgbiiB24Nc5PGQtHevJ2KxTWgwYgEJuYkEHRhUhMNSEeMp2Fcmd9Ci2",
  "key26": "4oaSznxXpkqrExQ5dKWHqJ3NC1D5NjMPVegyaPoUjhP2qHxUeH3zjmGyF56LNKVoAEvuLWkjo5EbZif5fRQZfNjN",
  "key27": "3CBpPSPMX3n17NqfrTtnEzxJmraECeTXUZqjrB3Nuab74dAkE4vBg4EvGgdYVcLMYHw8xur44nDLRqLYswvUrhmF",
  "key28": "3WZHMvj5PJMzob7tLc3QCmkm556Jv9XoWHrmYfe5ZVveS3uogyPKXazCwj8jayKq8UFNNBPH8DUo4ZsXaRjSFmv7",
  "key29": "4ewVKJhfHybdfrqEnMovV553HxXjES5ccxmQp8H9ir7JT3qaEugPhUJbTcewP14Jeccd5VRo48D6f3BdqbHtekRH",
  "key30": "5vN4D7TQaXJCSD4XsJ95XsaHgDvwXUytnFFuNWPazck86E6vQyJGjAVYhac5WRzsgGS7KKAudRnDbXTxKKKaFrMb",
  "key31": "2qBsDQZ6opzdxramyvtSUp7z1D9JuXfvUF5mqgUb7BkQUgdnvYkVP4q2ZVwZxvd8fmdEojwMVhX1png8fc568T5E",
  "key32": "5mERRHws6z4copJZT4JyMfc4DKWQPr1NwroDZ7wspRqCphFAzwnEcj9Ww6Ft3LZQVJTMnYLtsJafVau6SbtzVKKR",
  "key33": "2QB82AtS1ihtPaSNCxDWTVuzcusRuhxrcJXDF2nVUpizgG6YLv2SkxyfQEd8pRahD5rN3opxUw1WdMrkPCSzkqHW",
  "key34": "5TGwdxXzsfZPyMVPjy3KmiVL1as2MKbrFWRHCSBXyRaHUb1YHsoRKhWL4J5xvKExkUdaAvbvjWhZjpPSd4946wgL",
  "key35": "3MJaYTAEn6QAw5yKXq6c81kNcuyodtV4iPPAAwyJx48ZpqDUkHCbvg3zuubVYni7i1MXXjWZAqN7FqBXK3Brz5Sa",
  "key36": "3ba5tXGAqqLWweg3sVGuu1gcKq2oQz2RKFk2Zj6yBznyCTLEj2prDFzcD5QLwq4s2pjx3yYUxa4j4pafPijEktag",
  "key37": "4wB4VWspdjNVh2qwPXrTs2Jqw1xbrafDKAQPqwkuLWuDABJ7DCWEogYCQkbEraGVCFGJCufzdmwY64iqpnDEXNAg",
  "key38": "24qhnbtRadgBw99z21rWhKpPyLK3S26q5uy3tyQK15smwPL9UzZKGcpUjA7RPMJQL64EkrFhqrckQ1XvrJEW3wb5",
  "key39": "9rLP9ZYbBWvuQJ5WYmxoXxNnL7HMeJi7CA1rLEzBvriW72DrbVT7Bpi828gFTRv3KMDXB9FfX5MSv1Xi8Rt4Epx",
  "key40": "43QW7sFXNBnUv4ktByjMD84uazx4Nn1EQDLLZVixFZqUY95NCvnMUdYympdVuVLsE5bfkqvpbPMGAWmtzLN66UAH",
  "key41": "2K3bQqwUwCCSJHRaLCfi2zD1GwniGx5ndFBsZTGjuKuEW7heYGmfsVptY5Sc7s5ekmLuSmbP2U9x1GTEGnUNrAN1",
  "key42": "3kjibXyE1LjULJCsHqYgxNuqTxWTRSW9Ptcq5f3sLzM8T4GmfZ1koqYWd1u8SPLK34ZWaocZBhGZPiUKxuSBbjZy",
  "key43": "4Rb4EY2Ys6XH8STiknvwpqM15dDGiDZ7tMijoTZoh9VZpxxKtmdVCuBShUtXp9Ky3dZbkLtb9QEWX43i17Fn7spF",
  "key44": "spFeYs7JQtmLXZcVWoptSgYVLA6gucS5MtKdf3s2e3kKUcGnuJQv6gdDFVS1uvMxUwB8oPocdFw5f8hdUhSk3vh",
  "key45": "2y26tnZVbMZLFosodcSCmMborZt4Fm3oBByMxuQCq6VbKikMmHzApaFeq2yB1KgLt2gy77ZiWNYBiLdL4HAY4nuy",
  "key46": "2geBGApWKi93nPFAYxBBumackcjGzAqXEQYuTSCYZtGuCiGdQnY2hpANhnq8YZHz31YevSQjLA5FAD2voPR5nd9K",
  "key47": "63M67VcQC9DX7TzKLyU3DJLaDTKajL6E7tgnArb85QzQjjXtk4mEJt6xDZDwHMeGmFx9YpkoWaspW64CiFhNPtj1"
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
