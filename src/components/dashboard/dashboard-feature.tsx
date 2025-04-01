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
    "4QUQPrJm1LfWJACzuYSCi29Ah1qcPodaCegh9FdWgc3Mps58i2MjEQJgWFHDMLRPTfappsz2Dv4avDwusrPVHr6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXtSjnZAAUHFcUwyhCMhTjt9RoRCbJsmSCBG8eBQFntpC9yGY8DpFhJEuPYjKLcZBFbG9uwovk91Tkz2JYtoWdi",
  "key1": "2q3ezgFVRG5ivUh7g6DzpKHazkPFHvMKStfd21756TmX9qqGtZAWwFcAv6ZzJd6w12WyQUdv4KExbonjbQCLvqbR",
  "key2": "2rTfHDFj9ic7FazjxicvJgLFmMCKyao9ibGTd6ogvzkstwox8zPFdVurTNxURjoFijjzva7jEvKQrjs3f27QpfNm",
  "key3": "5it1Drc2kA1JeRMpz78LQurzbpr9D43UX9GAqFuS4dKHYBUQaRDTCvL1gQDQwZ4iR4FHEAbM9wweDSfdfH5rrLqs",
  "key4": "4jfSeeTq3FCzGF7VQpMPptcWah93ZQ8Tqn4gVGdxo5KLjuQRW5Zusuq3BgCJYRdPDx9K45vMpa4XVr4Crw26D8xx",
  "key5": "2xTf8WHkmBME49VNci5ZKrmrrZEG3k7GkDPu3GRsV3hN7bJNabG6hY6WD5gaYMCMC38gJaQLGMqzUJrGKdixvyDQ",
  "key6": "66mqfy2bSyW2YTc3tYBtui1tXB3NM7xQ4RVcb43ebsP8Y3CMcNf8Kwc4ABZxqPd91rsebq3dmhzDYwmotcHreeDF",
  "key7": "V9WWmLMDS54jinzLdHUrhjdCDZtqE5dP2dtuyHGFr7ppaNgYK98yzrXC2fPTz5nuSd8gN6mjtj4TEAB48fZyGew",
  "key8": "2MqJ43VPmaaHttXydDj2m11oap4PjNfmUcDzAUKWyRyPCJaxdvpwCYPr1LCcKanCehRrSoiCHsHjkapxJgXhEPhf",
  "key9": "3SGHtm57vj7hrq55PrdHg9cnVYaJhmXPPx6rh8TM3AHKG4rpFFNSgtyAZN9ECgdcEvadPqJGhXgQnYG5Zbz6YMki",
  "key10": "5mzw6C6SHWGHf36ypFnMW189mfghHyX2iEantEkjSKDUNY3R3ZkN6Z3eRQdskT6a5YoiiSAo2w1FgjzfKtFBTztM",
  "key11": "4ss1NeQMEuchCiQZyiekcf96Ey5NFxqCSyspwNoigqM8ebiR6pd3STt3u9sPZU11pVGBguQZhsDhii6bt7zhR4rt",
  "key12": "2HNLw3aZsd8TKXYLp6smkx5DKrV4V3Akwx2uKCuYRx5pLaYvhs2DY4G5pJYPSGfyEngL4Tbpyz93EABwVxY6ocjR",
  "key13": "2cWRq4PtFzfhGYrUusDhPjvW37Dy5sp94DrRFY9tPK9vVL9aKiXzhhDC6vg7cFVa1Pc6HjKR95uAd6gncbGJXrhy",
  "key14": "4Dr6pzvoZpJCGVZacH2Lxdugr1sKwLG4McxfeSGW1Wco9tLBdxYpfuyUfyKEsUatwAjofYQFYQ5XGzPBsZLWy6e3",
  "key15": "315YfBL3Q8beBi9mE1PyFp6Yt9eCmLtwCYTdaF7RdkYXz6Vd93DHsE53H1QiB8YUXkrjJ5JsUjmfE6bn28WMYUei",
  "key16": "LVZfesPjJpLKPVo7Tes2pQJU56uhex48TqPaUaVWenqufTCsvFX4yrqd8zVJko88NVU4ACn1NFfiKFFG6UhKJdG",
  "key17": "4rmusYQRyprRvMs2qNbcw6NdtNNos4ZePSjNSJCT3WZqyZgRmmrCKbxtoRSRftFno591jphmp7CvRrUbwdnfPKhJ",
  "key18": "4muo9r78ZpyqFhJupohmAb6nYkc3mVJr5Uu1HNPNMDW9VzqULgUC5wFFR6Q8TGSk7vWwkMF4FBQJNcd5p1KifVBV",
  "key19": "2vBSaMw913Uf3CStPu497E4qKbSwhZtC4Jq8NQYEZy98vZp5ojjXjz49QWyHbwDjS8Vsa4CnNsSKtzoPP7LbyRpd",
  "key20": "mCYe7uBR6dUFcdHSwWM36VxmZkBxLAAkVj4jVhi5fzte1zMDhjsbPheuTXitE6FkPZcshgDSUAf8nG89Qipd77k",
  "key21": "33LXyu2JM1iGgp6owwqcguVVCKTUksughvyJQVKZ93BirDkKi84kPABRYZisrodc1Q2WxrWEPU3vPxZeyfhxReh4",
  "key22": "4GkqtLikEzNunfHCP94UMCqfgrTqhmrncdzBAtGrBpJdrXZwoftg8ShD1bkwiD954WjNM9nqYnpTvc9HDPJYGYRE",
  "key23": "4KyFeGJZbcPqjS9axPALDjh2FvgpxzabCBqDLBBrxREc2u3tjSLqmDf6z6LV3b231DA3yLwMeGSJ1e4wjuKdZtgL",
  "key24": "3Cq6v5H7wKsygnng78eA4Lkfx4KcrKt5FBSbUKmZ19tUBkMyd35mTi1is31mRJMVznvthgK54SM2SCfEtkFxNAB3",
  "key25": "LJXX4PnXQhUTpq8pkdg9k6awzk3hPoZKQdMTeiHBAkJPRGw7W6ZupLLkWN8kWb9ChXKMJBUeuHBPvdjKsGA1qAy",
  "key26": "3mqX29UQdcki64w7vyK81Ydas76cBossegFTqfJAJVUxr36L7vBMXJaaociaLEvwup4tX2ER5qXV1DKZvgsNdsTZ",
  "key27": "4mT8Kd45gzc2KBNfbMSmkuZGs4kVPbDVU7K6ELrEAEhQHpcbKuHGf51eaAE156dTES1CtHzFywf1d5dLTjnkn8Ws"
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
