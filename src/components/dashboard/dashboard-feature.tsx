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
    "4dexAiRo7ax4hcWX5TvGUM7WfJ1U6vDxdYPm1CQTE27tV28Y4BcHmgwERcVhxeQURq5p69mgpyW8TUiALZgELsKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GgFqQaSFYWV4oi5H3VjbN9yKA2xzgZTaGDmrt2npKgeJsV3PQc6zDvx4Sqj8BbtGSEAzJB3o85MJyfSrAW9M8BG",
  "key1": "2fi4iq46SbbPD4yhX9YaJe4tcKm6AL3nyN8pj53XLeC3PvWUV4wSgW9aaF1VeibKuKLin5wWHS9En3MXobYJFfS1",
  "key2": "4PZGjKB76V79wntCMhK3Exs1EL2aSr7wgvgRE1UBTVXJUjNg6HnSMiDxJ7hkpq5KkhJHLcVsxzbvS8ewVf7BKrba",
  "key3": "RrrUnHV9kD4AetfiUsTVsinpfdMxpwtyp5t4FpjXtz3i1fareVSc8inhdpFaNmUmGiikgCNpa35KCWoUeY2NTTz",
  "key4": "61JhwLvMf8LBd6hu2r1p8aRTMee3vkGpFcUh4RiJLFHPJaRQ9zY6WvE9YTgppMooYLtQGJDxpWtL4MXLA2UDzViR",
  "key5": "4udK2NNhhYdvgXwrBUuujuvAH1xg1DQ9ocoAs2M6EG5766czJwvQSa7w1KfFhxSVncmYBTBZACajbdmtczNezYLh",
  "key6": "5RZJ5dFy8aHsUM6AqMTyrCiAEDLjjaYupExuWSfgd87gjD7XNs3smqD1nycJqvugpFmmB1ZYSiXafSXcwTBQ9tzY",
  "key7": "kkU6t5YBCq17KRxp8btMQnf9Q4bCsCu6wgDqMXThKo1xoHjbUZArdGZicnACQTnuPVXqw4xLSjz6uSRW2ppnbFJ",
  "key8": "5fmnCgnf8uhHcJkyCRZowvYgPtho3HogVYg6xCKgCkbvW6Gv2m6xnSRzcZYpKtZBaE7esEnq8Gs4c9hdJwDcdHuD",
  "key9": "3b1RMiamu7U19Q7ULsDucJC24aivGo7HnngKwEs17quC6fxjb2gLcPYpy5Bt5nh6rzQWaUHce3eW2VJBM3EsZiTH",
  "key10": "5fXaDBgRSksCiZvm71YWhfouADjATqrAwxcpxcckwS4TEiSmVK4hE8sbuZvdCMgh1n4WBTAWdtUdasmBW76pkjur",
  "key11": "D7DQmRGki5zSTWTkr4kMAZ19WuamcRxQNzV8X4PeNsCE114PA2T5KRSZSyh65zCuuyBZgjbreLs9M1nDo54jMuK",
  "key12": "4YnrxhfQ5aagyDAerBLbWrCys2YCNc2x11kgZ7xpjesN3nXGht42dJhzXLiLpdazK9XAGsGBFzUdVrmqcquy1gyH",
  "key13": "555zj419fw9aZSPVC11QvaRZrDNeArKwEVgJd2BZEvJf2AH5MYGSHNnXiSx8SdKYHD9LWsPjJ57kWX5STfAgqG73",
  "key14": "3CRSJ8VP6UCK8JyngwqEnaeYLLLcvCvZMQhGfyCyjFnmKhopc4w7AFyV31B4VnoM3sfz44sem3LQ9Y75v4H3o7bT",
  "key15": "2dFf2Uw4kRoU7qn7QSRZ48rZ6PVPeYvccXHmXbWN9Jt2ZpJZQszh8psMbT4sqkWaNMjLyVdsquuD3K5u11bUFs31",
  "key16": "4tWtkeFoyXr1zfofqarCHqVgShE4zkgmbpRj7vP5xwZprR1Gk3NyF1MfcuAwPVKMiDbTTwpsnCsz73xj1W89BCvo",
  "key17": "66NyWkUszg2z1of48yz9y1Skm8xXdNfDzwkRcdqZuFrXrWR1JGD37TLGm5T9tFSrqbwPuxja6AJ1BmGm9pnz3Zfe",
  "key18": "Kgxw3AZs8b54S3KDxJX39X6pVoBCdTFTdg49pFnhNdLWttgrDmzErgjySrLE89c9km2cpCPnJVtptN2aRDNaAJz",
  "key19": "44oVDMzKVCkz5BMPDudQkWPSoiw2GrV1V8h1SvnPQrPN1koJGP9RzzDnwQ3wSo35JQPFyjQoyeE5KAsgjDpJ25uX",
  "key20": "2MQTQAte8jxNccnQpf5QLCytsGhDC4nvhpnLDStsiPh1kanEqiRG1MBpiQzmCpc74Rz2SCjVdYj5uKg1UEgdjL9L",
  "key21": "4oDtN7UmwEFdFQJhPCRS8Ayhj3r7AURbbwDgRigvLexTsVwDTLWjydLX7Nx5BfpVzXk2NkNcPwKbu2kZwWWBX1xT",
  "key22": "qSk2SCfsAw8EQbc4m4HVXxkiTzfqJVA5kSA9He3Gq9ykxhSX2ZewBmoGnkNeP9HZBToq4ahcYA9HThfpdPAD6D3",
  "key23": "2mD42FijcHLXWDazpHExeNxssXCTmih4dcKcVfsic1Fp7Aa5HrQN4yGns9R8RraaQeDuWfLmfLuVYc76YpFrhZJs",
  "key24": "3s1uF4KBsBPQANRpmvG5YYt1JAU2HpBH4BsSsxjJAtNCMvzwtFF4xksVGZZ6S5j9sAn3b1YSaj25hDPTemDJ9tQY",
  "key25": "egVbKnLJC6MKkUrXXLg4e4Ls6Ps3mQoC89NKnUf1XRMAsW2bzPyyt2Q5y84oTWBeVhXsDCNqgW8CqzfYmBEpUkM",
  "key26": "3Va2QoDY34VaxKevKZaPdzkE4p4kPv9EWmvkPHtkFFnWdGVovLyWGBXngSquyALazgkQtcdT9y86NjxL1x1LVRh1",
  "key27": "3aXobzhSsZRMQxt8h6pAuZKUhP2kZ3KzE1t8oJrAQ4aohhaG5CrchHxtwqXmWb4cxwvqCoUt1HLqHiur2hw5Qwd4",
  "key28": "2HJcbhgUNgduYTmTUTpPt5nMSBwxk5ivQqy6bsvxLmZKV7RQYYyrFTSj5M3aQZfyMC61iV2MscTYJ1mTo8Bs3qS7",
  "key29": "AWCvD25nHoFHEUAL7MAnnB3Yp3QgikLAtzxo28naGpDJ5KdDJoCjPTFgvi5EwUtmMubKBM3cphRzDxyjGyHoxP9"
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
