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
    "5SUxm1msJAhv51FHJ4RoFoNtTr5CSDsDNWS1miVroXkdEnfucq7Vc1sHZQzRAgaWg1XVv94Kx6m86CG7hpNCMHfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A5Fkd4Q5NobxCSkVix2a2ug1WR2HNnmd8idC3YsSBbR1gZd4wZDmsxEXMnb2RtR9yfu7Ate3pCQmzwWMcmoMkhp",
  "key1": "qzDuixVkN1mgKGTMhwv4SeGyvQ8WF1kPSvppxGP5Gsk4zxbvq86bEFtd8HvFbYVqYSj25N189V8zqMry9GJX5oX",
  "key2": "2kDjMucFzZPy9WzkE7VjA5WsyDZc9KtexuWxLALA6gX9DZyGRjWhswgznXeZDRysLkhdTjhm2iN7JAk2ve2S8PyF",
  "key3": "2J2iYoDGycg2uPXKvpNPe6yfW6u9VCyejQcgB4cvoT27XHibVnG9pqtUG6eDwWC6qBkBo48vHoV4pWo4LsYpjE2F",
  "key4": "64Y87B1EaMhVpL7kwzy7E66ScSHSrHKdMTDdgG5qvAbr2r6ytoub4PjVC1mw793EM8LJB4QEBkvUuxsFomyCCoAA",
  "key5": "2ChGNp6TdZ8gmMDJ61fUvFgEVbxV45XASHoGRZqcapF7JKt9Xq87hGRPnRETpDedvkjywhvSp3yNPnAeW2DUMH22",
  "key6": "433sHcGqhWwwGoiyVyWLEGexPoUMg4CKirthEx6P98b1QVdGnHo6exJ5pWviEWJ6afA3gN7ZpUV8UNMigmYPg2y3",
  "key7": "5z3kF3yQYbsm7cJ7ALkicRmvYaJtKSAYuWihb7ioSmHPLsmmgJEEAJqjHMRFUCgY8VWNBxT6WmW18GsrgYzudNbs",
  "key8": "62TK4smJnpXfWTuCFkyarz2Cw5jYeR6WUJuKqJmWRMVcdFbci7JLNSoLkNEmqRV7w4kQW8SwW3KCM22NGKiBdtSc",
  "key9": "3s8ZR63qFS4u4F68FWAz6FpyWccWkSZTyxsDyMT125EczJqLmWGmWMvd8CAQWCUeEsD34S5fQqJ31P8kSGxaUMq1",
  "key10": "64aYYxXPsdJYczpypDwKu97M5FxXZkGWNbtdSpdK897juKMS5WAAFKmrwzgbQxfHyZceo7JhZEFJ93Pxb3p1TE8k",
  "key11": "4f1MoFuorEvfiyKVF1cX7d8hF7nYiPgJB7MexxnnYa521nhDTEw3o8yrc8KnqXY54868EFuNgbqaFESNzLHGNfBW",
  "key12": "gQ6AW86N1yy1FDvrejeySDJccf18AnXqfh3hT2a5zc2GYYUQMMjdx46vKHEjQznt9BPZ9VN2rbVwvYfNEHvTMFb",
  "key13": "5QHAvecX349Rk76oniom1A7bCR2Z7iirnWbGmWMM99Fnzv791Dc27pToYrgDomuWnJZQRHem2yNUVyibgtp58EcT",
  "key14": "5dZkNiFQffA9escNJzbZrUkaGfx2Rin13MkSXsggDz5iscQQEYbVyjcvFvgFfkez9LPiToQweU4QrseSofCLcvhH",
  "key15": "yuQXxRrfcUJtn4VS8k5wT77W5EjkpJHZEVBarWQ74NLL2U65VM7SoBZxJnmyZQum51482iXXZbULM3NzHcte4Q7",
  "key16": "3EQWuTBKWWXhtUCYtC2LueLJ3oVNbJEptYTiZP7AG4zj7iGroum3KLBmZqFbwt6rjmDv2Dfqizmmiv85Cs1twGdS",
  "key17": "3EZkuzGWU3gncReVgXEiJAVubmijh8GqoRg3wnBBqMWHMh3KKtYVa1KdjgC2EhsLLPJNZkSmBGjMEpEahsd8cPRB",
  "key18": "4hjibjby8F98MeqMnHEuCVF76qADSADSydCtQYqmusZin3PcKHDqMaDtASNQhiKpTQ8yymbLW4q19UyipHLDtyQ2",
  "key19": "4w3hxD42omC9FQQkLasoTz4ZUkVciQzaS9asbo74w9Q4MVfMGJiczMLR4upvE4UgXZskVX6SRJdJ2mCiUcauDM6M",
  "key20": "2cwCC7b8BcdgQRRDe9JdBQtALnciSeUj3vRShRWNXVWEpoVBUTf2YtVTkyqVjPUW7CafJrSEym2L2hnMbycb8Erb",
  "key21": "5riF8ocdj9J2DBMfHBDv7yygnCyUMXcPBbUmaKDhWFVo52xxLyWie1WyvynBwrv7rAWyvMnCKsm2yqUCC3KAz6im",
  "key22": "5wuVzm1GpxGqaVXs4eNgFehmRGnebs8EQPyBeXSCH7TxGb4v21z698otCCGYE2dPHtxopMeCs7KUEh3eRSQfcXXh",
  "key23": "4amGCsPSiYqjwfXyozx7AJj61EthDU97BAWPwaEsgJ2sTziS98bzDJvy9siZTvCQ2P7KLYHpe8Wqza7fcKE4b964",
  "key24": "66U19GvAbooAw1U2Qfzim1Xi5QqYbzTQCCVnwCmQZbxRbpqZKEDqLhAcbjuPHkR4QeLNVGWKw5rFPSY5VYRLoq4N",
  "key25": "2PDeEr4YvxwRKHLDNQjGhHqFgrCPTUPgnRxVcjKXVhkaBKNCRiBoQQj8JnkvnMcNoajnEkAdnwFYHxiSys3Ud4To",
  "key26": "4DYQMtzrjU6kk3iXfKMsNo3pjhMgHx2WuzbBbmSNzjsproP8DbXg43QXgMEvLAds5csywEpLAnTZrpt2jYRmu2Fy"
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
