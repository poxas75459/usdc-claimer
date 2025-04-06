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
    "5HCuczyU8Mqdz6APLQYL5Nc1HSYE9ezto8WDHwKLo4iiHUDfrMnGYDBmFNz8Wqai9VMTbQ7FfHeNUzXNL81WR6U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DCMhC3G2CT1tLFb6UQCB8Hd4pKsVvkfXqQXyova5n968xKLQBHp9DdWpR5BZqb8wbhS1TxtmQtknqVhbMDgKsSa",
  "key1": "2FEVQaTU12i1EzsGkDFTnCdfQCKNkmQkR5CSuMkkpPCrFTgm6NsEys3ZdhFiqg1WYqicVW4qYu5Pq78VWAT1ZdtY",
  "key2": "5jvNkMZXrGLKUXkNzbhDGyE2s6q5FMyXT52ccprG6YYh2LCgtCi2o8CKo7xy1N4qMBv1eAZYidxkLRkQyFo6EW7G",
  "key3": "2EiSASVvi2RDavuLEV4QwLPfmUrfiu4ooC2scEdVs2iDJ7rDSVqn8JTksK9wQpe9sfTADKQCpfU9QhikCDMmHsX5",
  "key4": "3kkqf86Jekd9ud3m4fqne2hgV6DSSLRBroK6hJ8ZwxcHPKiPegQqvqCCNfMkoWJiemSKGHKFouZSQjXeseJ2dFaX",
  "key5": "23JzNeMp8LcYyVWnrS655cfEXCoFpZby4JfUjHzBcSS6fDY5C3NLaUS8tNeDehvdu35yJeGxMKrkkP2zWnGFKCyh",
  "key6": "22jmBSX4H1M1hQGnnVQyP9tdJVcWB14FPG4GhkuYXmQwSmneB2ZkVXFeAoqsWqxMKVA7BuPEeC9a7rLHWKFYgYcq",
  "key7": "2vDeNquxohoFNLFC4uPbLhvjREmSRrVXDdpHDqnbXXs8dWi5Xd3toSpb1jAUzRJaPgqUqAURSraaV2WbNDXgrdYr",
  "key8": "4wvMbLJcCRaHrqntAinXAR6qg6sLpuDPFPEzHdES81jMSwgT6ZsNdSRFNi5XWpTm96DhH75JeHh5cpVznsiytSYD",
  "key9": "5KZkzqFa71uHdp6HBb1JutymRSHT9DkybgzKEyUE6uXRgc9oqjasfjZcDstvae6rrZZsyFGEMc9FCCC371cZgxCR",
  "key10": "g4gBcK2Ne36iM7C3TQrVXyv7P4dfC1CpYtM33FKhttDab16kTJv2q7cuShQka53z1wFCp37VwtRcfeuhvF8LKz9",
  "key11": "4UpgZKkRKjCASyXjLT6hvuCwjCoXegiUxJAGbiDs1ZvTUy53hEBkKRLtu3ng47qGQ4venpGbwyKXyXqmKNX9mQ27",
  "key12": "3ZrqCDdWzRE6W89FYqvqvHH6UfgJrecmXGxYCufDYozzJk2HkBm1wviRpufrHbjLTtm8XVUk5Ys8pDcQ4nG56Z3j",
  "key13": "3UPKCrPbMJQGsGmtzaFDNQBviAugAULQy7nmzSCBftnfGnxS4Cn9VFXqLbXW8CT2GXoJocpbSuDQbdGJncvaoQps",
  "key14": "4DQ163eoDAKcYD1wtfa64TsySM8NdNbj3J6ySBZp5Low9avJaSbaXDWesG1dH1SedZu5Hbu6XnUaAvW3efurSrVH",
  "key15": "FqabnRZP6fZWJ22vEGwZHkLg2hbdhHJgdzmCMEBQnECpGD7pxjdzrywkzRLzgiE35zuEmgN1vSwrDwy324VW1vW",
  "key16": "5Fs7thzfG8a6piUeXMT3VftTkJMGJvKeZDnr9GcFP4DsthMYnvLgwdDj9pgktNEjxunYmAy79FWGeKuzB74WFGaS",
  "key17": "ECeqsxL4buuXGN17eNzrro5ZZyXAdfyVJvwrtH2ALPLW5nRR6eyEKQds461VGNmXEbseNN8CWwhTcmrj9db9wyF",
  "key18": "5A3NBcqtFL5PPA3Qzd23C4YNSEn6FRRLAtpyjoCj6ghVrgTqav4sEPxr9bqQQ1VikBxy9PbGtE5hJqndJct6hi4T",
  "key19": "2u3GU4LhNc63sfcG7dVUoaDMcLWEmS7RrZb9wSpL4oH1BijcTTrnQ7KX284ZG2guiVpuSJDarjFUHbeG9g5zR2X8",
  "key20": "5nMhYK4DEZzkMfpufxGtF5r15nPuGwLQeMqGNcbKt9AB5pEMVgww98q2QDKbyZ1yUFy16iBgNCKUmrzZCTSQ3uSc",
  "key21": "XP9nK3xjpZHmF99voeA1FtWt6qDUqBN1eMH82kPXp738ALhhUi94xiRQtqu6bsybD6W2165g6qQvJ27j7dLemzd",
  "key22": "cfXp2saadpQ1ZG4AZtY2jhcrpk3weGi9oE4prA8GvWonLUku2qpczQnn84Yg64N3Mui2tpGWUSr7g4bxZ3LWyBL",
  "key23": "4UgtcDUfKsiwX5bhchEEuHbJvujsdHVYGEGSsowY4HTbqppVCTVwtEjo7H1auVpnvFe7mu5eanznodrd5Nt4L29G",
  "key24": "4YjcpD2Dh6SUdazYteqaBA7YwookUkZ3vxckBmZTaam53q6maunUYY6Qu1GdryPpj9zpUHFgXBGB3VdEJJ3p5bhs",
  "key25": "Bzu9MJpK7cvnFxV2vwD69HFqDJyJWrtjQbxYz2pYHvdghZxez5itSgzg63mt28BisitQkjZrPAxnSER6TdZ4suw",
  "key26": "4E1SxTwEXnocC6hJSpmmzdZs8fBaQRdaZ4EoWXQZvLvid8fwvHeKJdye3wM1WCPmjJAxn1YtW2RqQxv3H1LtJBbt",
  "key27": "5ApvJNKavxfYtUT4KNBQzSP8yZwwAjexYdR93SSXa2vRNghqeBt8fHehWstJVLzfVtuaw2kc6Kp25bKsZfWArpLt",
  "key28": "2ZqzvBgBAoZEua3bdSFjqt7gcjToZHWnHmWtcjVarcZJAGDvZM9VvQC8Xpagr5L2M3kYMR6VEBaF9WSBXyawg2Mr",
  "key29": "5jB2y99NDfrHDmAn93KtpNMPRS6pkLCDh1hZCS5DVnnSBDdB6AcmuNaRekN3CevboL3xrUMNtc42kNMbfnZzzGLL",
  "key30": "JWuGFzZqzkXz6Eb1QHZQuxtoSYYRTKfTzaaMjCgMU6LZdxAgvdrqJF8oLMTAaBHRXHkieEbKYXKBq68BrMmrRUD",
  "key31": "4D6c9YmFeT5shcgXC4uRYYXhsF9c3o4yriTd3Qoj1iXkzG2M67X4mKqGM7KuEPssNZSSU4AvsU1pzAYybLbo6Vn9",
  "key32": "4G8Cm9YVTuJHxpGdm6FASPXLdccB1sFoVDfLWmp1frwMvy7KvCYjjAkP97rxicYzicpPNZGrs5MtFEuixvD2A81E",
  "key33": "4TvyfSDaV4N6ecGh2NCj4Eb1AUhN8w8iwcX4gobfGBE2YLcDAqrNrHs1naEkA9HCLUkrAjjLtM3eUwKDAwjWtUuc",
  "key34": "2g1cdbyxdMZoDrnxXA7VkF1dynnJXLRnQujenNr33i3BEArkZUWMLoJXZuhFGtQ4doLS9be6g6nN2ckhV4CLupBb"
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
