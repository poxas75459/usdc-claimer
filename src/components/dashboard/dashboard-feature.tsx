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
    "5E49FtaEisXzirTnGGGVtYtEUub6rChEv933UE9YrXegRS8vKtG59MMZLnKSkhh9ZknJmpKzMShVpMaacijKQYNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jxLXoeh41WmWS6CWbT29ZDr77MjS6r7fVPsifQQ4kuJCdLFHh3QLSCVBNPcEeCkeaHrKMhF26AP3dhtUJrSucWV",
  "key1": "2spLVHed1zk32gWWS7ZBXgS9EtNR85gABq4CrtdnH4jisUGHEfDfgLNewdG911vroymbQ19ymtLsDZMCmuV8kkpK",
  "key2": "5oWtKuFt48KPpJ5AEadxL2aJXvNkHakNDegSdTFD5ZdYLFTtmsr5yE6SqnFdhsMZVUowywbxXexbQHES9zCp2iLx",
  "key3": "3NkWHPvUsU3eDtqtd6775LzsBV9jDLcLJWEAae5FPxEhMQazeq8cjYGkz5xDvnVYKuzB8thBrRY8eD2VwDSe1kDJ",
  "key4": "2g4pX84Wwhr5E6mcy32YqatnBokZKvR1GnPXnv5VxeAbHLaEZNsdqjepCdNkLAdF1FzHw81Z4x63SjSQKh1xYxNr",
  "key5": "5fPBgvRrq2CdxW3TTsLtTUdFYLYJZPwNaVHCDq1p8sb4tU1Tv1WmmmR2hA5U2xdtTEY1x58wxQwfvHk2UEV4R75G",
  "key6": "4Cc5b7pZWbdooFKdKmZkYWzyybGHDuLMPZjbCewcMaqzXbiH4pjZqgoZmTt4sAHSbGsi1yKnG3KpUa1tcTnwTUDa",
  "key7": "44k2SsysBkC8c6L6ij258jTiAjpLazHaYVhLZWRkNn6xpdKqcF6FQCWR2tcDfVTKp4Vhe6FKg2xRLePZY9zr8bND",
  "key8": "5hFT21gnCuLWNR1GNkEwKfo262rHRf3qzHdTbcpnHc3JY9aKdBfgWrLQUbfmw2SfnXxEgz4RtWykTJUP3NxhyKXn",
  "key9": "4JnEV4XVob54qbTK3TE3spSgkt4XbNdi2jRvyd1rNbUuy7887Pc8J8CDgiWXD7gKYqRadwtmDeedTAz9LhSALEc1",
  "key10": "45ui51BawJdsxaYhiUww6ag46u1MMTowHdPJtLK8B7Y2gk8P7rKNHyNRo245iyF32GjPSi2gZpGyyaDD54KTvYeK",
  "key11": "21uG5eH3SnB4b3pK1gVRJgHPu9ebb2waKpmYruFLqFSEYR6Fi1epZxGH2vaMKsV26kGCoom28zMLQitrQ1y6j1Hf",
  "key12": "4yBdKirfA6hnoPmd695Cdg51y4S7doGKgrDVQ1X1CXCXziwgpEdsb5TszNscnCxexLrPkeSwQdeRTgkJKp3N5YAw",
  "key13": "y1oBNQiQBarprwCqyMdZWoD178t3W1zJdbEwDRHtPgkHnxDduBBNTh9xikTiWFrwtgHfaFAg949kn2mWY6Atqwj",
  "key14": "4uo6b5v7UNkCZsHCcFNfiN3nh4EWAwB6m2gvueLuNmZd86RSj8cE7THcxpKYH5wvxFCZfmjEpG7EUZKNnRLiKAZg",
  "key15": "ZwPQaDh9SMyWTf3P2fE9zZBvDTpXs6XJGMSCmgDG8zaR7feiR6CEo1xK1w8r4kkNMyb3gv4gcFqURRshgCGJKMb",
  "key16": "2iEQsRS9rx39KdbmUr8WfH1zNYERXV1TkFKaRyrDJbKFDKtxinipBDHbhT37WjUiZcbQpMj6ShubUSxvKzFeh9k5",
  "key17": "cTWo4KCzLujn9L7r51uaJetDCaPNXTqZn4F7E3iMiYfMmVbJa2vVQLae2Vb9Azdi2L5xf5xoLq31wJLeVAv2TuX",
  "key18": "2MnCjfUxcV2P1WHmcHE9iLKPk3RwjLRnroS7H3pihUVfXhoHmrj6UWUH1DbpkR26zBchiWoFa3WbqCFi7xsH9gWc",
  "key19": "kNSFC3AiMypYXURTHannZLZLk2t1pLMM461MUTpprdjdMBzcWnKq2eKp4AQSxBb1koRgxtxZVazdnSsw4BRkfpw",
  "key20": "4XGrWN1aCGmL7zR833zTzSLidRqdA3hgd3nrG22wjTq2Cc1MHvDBQhri3EjFbSvQqhVowDqtUEzeTcJXqASd7Fbh",
  "key21": "3nVxh8ewDQhUmuc83eAsKbRiih9QtUQYrAeDatKdcRYsjTVydH9ia5HG49KWhaxkFScPy5utQXL782nMM7YP7vof",
  "key22": "5yJsXCXu9EULmyxivUDonmSpVqtT5BTDZAxNMndMrpG6wU5PVedQfVD9T6kqVtevSr2RfyEZfneLB36wA8bzotay",
  "key23": "5G2rVVEfySq3royrxWFuvEimzkm37WPJyVRFi2pf827FY8qnDMFsXaiWmekppGCqchge1bqbdVD5CNR3VgodSTfG",
  "key24": "52D2sHTL3bAK7K5wYii7hN4xBUD1ZJp9RLdtEyYKggSndqAi5jGsYDkGJgSCi3V4AuLGDaLrbRmUvEPNpeoGkJvM",
  "key25": "5NdRc8H3F4TmSEghpMkUsEmXJeEFVfnWnX6L4MQTmgZojQqtQSadoXPnwbvrKm4NTELmN8Z84ueFMpQ9KabV53sQ",
  "key26": "5MLBH233XzhwWrSqSa6tdW5byxmQJYS5uT86ApqWNhgN99ykFcfXmZ6bB2Z8B6TngciHS9ZWggyKBUGQh2EEkxqE",
  "key27": "2oBwBaqhi63SUDALNrx8NqZujdZD55nrDXYGxypvWuZ89L4pZ8yaCpTZQUPRc1aXH1FNE5EPLf8dTjarnxSaUR7N",
  "key28": "5oRLHcDRqcBT7Q1XTCZA5ActdaUfUrsBRvBhAUnzAD4tA9V2JptkgVdrYWoDtDQcq3RZt3uZwWjdFfsgS6yG6cb7",
  "key29": "2YmmkEdusDw1G5xyZC4dyuubKJoqSH8VWAtwLMxLBkgy3L9D8CK6HSjxvfCFumsaVUeTqcNEV3BisPZThNpBAHio",
  "key30": "3q86QxYiJggosDLHNK36itsUVVCUReH4omn7RsQEa1Gfigm4ERYbvmtoUpEqDnjQYkFQfzBraFyPxtREJmhquivZ",
  "key31": "tqMVpBHHa3r1yXLn2vye6H42skr35cFwMVA2fqgx7nXPc5nxPDhPvM7yreDcNgcVbRDTBS3ry9L7KpZgimNdevA",
  "key32": "48piBBCY8JGM4yaQ2pAgSpygpBpwGqitatG2JC7BKPJSYWhDpTWayYUaMnb6UYBb1x62GMZa9U1sWidXTr2kV4UL",
  "key33": "3e7ARPSS4xF6F1626z9bL446GVmoygG4aWXwxFrhYp9xH1VFabQsqZzeUeyFxxUm5VnpbAzDP7zJAJYUvJpgLtft",
  "key34": "2YX5nTPNk3aAMKh9XdmsUYmGxh19Ky1jHxfCP1yZhWADMPEXsbUQGYCiUKy6evsC6PNzgteqyBf1pwdUAH73sz7k",
  "key35": "3dCAAyFwJCSbKTuto5iy6fMKC7TpW6xn8KNeDaFeS8VqyGQYQk6Z7NKZws8qyM5bRYTbPpFaE2Pk1rGmamsXQ6UE",
  "key36": "3SiebiBuzxuPcejGrCDrVm6GkcPsGfQQh1dpDK18Tj1qJNYyigfK8pDUtNXEkk8iARt6dRRM3EioZjEqb8Pjota6",
  "key37": "4G4CwMhTugi6GmfqXWFLvPGzKLhbMbe3GVDkdPp7RhpURKJHeYGSED9oF2oj2iqYknpQfAdMds3M5pLZ4ryMo6Z5",
  "key38": "KC1NkY3D4Fb156jwrMDmhmdNwWws4SXX8G8WeCZudaQrp2waE1QqXcVQ5zNJA5C2ZQmcnsCKHdV3s6DGFkx8tpR",
  "key39": "41kxHBMYgoj2CdcmZq4wHJb3Pdo5NjkaagTD9hpG6TUQVQLaPks4c14TpctavoUmsBDbDAKRkcG7YxjbBjaXGhMN",
  "key40": "52P4gSbZzYkgYhuSyvMKamvHZUmaJ1m7x7X1a4vKTL5CYxX1maZZuapPDhpW3WUTkDSMEQKX9DUUcDWcow1FMYUn",
  "key41": "5PWovzWkwMWLd4fj5Dnfzf3i6jCiSjcfipkYtXDKBrguWKnNoscah6LiCgP96QPpKtBosGsSx6QYscFc5NsvrJvX",
  "key42": "3DT62vtgQCs9rktyQCXpMSKiDGLgm8oXYqhAKRB14f3KbsygzHYSo36sBwYbunxsfMKdjFxXam75BzsHNV9wmxf8",
  "key43": "2npWABpn6XCfwfQBA3vavHBqa7885VJgDdodeFUZ1DE5FW2YmTW9h9yWGYbfQc8YzuKdiEqNHPhXpdc46HPRufL8",
  "key44": "5HBcMXDwnptrgDw4ECzQ5MS8CqYVer63Nk4f7r3oCE74215WTso8rUY1c8c4Q4xRow2WixHYTaBvM6ok4MGDnqC4",
  "key45": "4QXBscuUPEBTq2iDuFBhVNSxtRUXVQZ8TtGD975WT5d9vQFXYexqhLLfLFny2Z2z4tyxVZTr9YYooxdyfgQsp6C5",
  "key46": "3c5kJKYyuwh2vyqfacAvyf7Bn9WozYPib2NkHfGeMGwhJv1cu4NaSZ6W64nySRjovUtwA1noiab4N5P9WM3YjAcY"
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
