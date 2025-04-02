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
    "QS2wQPSzfgwPBfG5GMqXfP1y1hmKYCWLqPBVsCgAneNd7QnqvLQjsBqec5e96zY24YgUTG6HTVa1eix3K6uRVMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HE5HiYKNDLF6Txi9xZ7tgN6Puko2uNG5XAMECnaSWB7cXNTfCzCDn5DBATdUQYzTShQgVHeacRfNtd2Fw9VJcF4",
  "key1": "PzKEZuHb9w73o4S1pn2cANE1ZKAuJYYkHB4CdCtS1Ax2iKBj1qcwsxut1brrXGziVKrdPpAAZfvaP3GoQrR3tMn",
  "key2": "36H1jKuxfsSejVkB3zusj8kHQR1CgL7UCa5CV9Ddq3J28xjH2sPsVYTh2oZifYPwQwprojGxSRLJ18DekwfQz8TA",
  "key3": "AwLuphfn5GKY1MdWUdaF2BYicTgn7gY8HxKhMCfTzrUtSkE3yYM7GE5hfcoyvh73ZeZJBvyL3eKdTs3NCLrgWqw",
  "key4": "5rZ5o1arDnpm5SJSa952inG3dHF1ZhMW9vVcX7yiipnxnKN5tQcsaFaLqrBxc5UAWNsyZSi6DALP5Jgdik6uvxey",
  "key5": "2ZQ94k3XzoZCUseEb2v8X4oaGqW8NQtQHp7eWsyATxQHb9wUnwj9G77DuLtdCYJaniLnwLkPBjZaUszYkkxboWez",
  "key6": "3heDv85jyTUB4DenpgC2iaaDyfcV9au9GJAVKE4YYSgfXkFcdCU22s3wFeLDc5BRfEYzo7RvGYSzqe1w4j1Nahd1",
  "key7": "Uq3a7Q4S4BvHqazv7mfTn9SSgEnz5nYXyMASwFkXB59UZRBGq8CsSKAaHBN9r5dJe9xfZD7WYqybMJR4uW5W69C",
  "key8": "3ENJzxpAY6MuedUaj3DpGFi2kfdyLNo2HBhkjK7Cndv1fNqJimP8wcikDtbUZVabPMf6ibaKTyETsFJzcKz5V2Ec",
  "key9": "4U84hYQvtmHjCDjPBQB8Sbxph6FdrUmQ8cvCW5DaLczc2e1kpkAabSMM1CHVT842LKh8kZzoT3teEi8N7vyamqXH",
  "key10": "3ztMkE5XiNL3Vv4xxTAvAsTG6ShTZSY2q8Z7HRGiFH2M4SasiryVoJqCKj6kZ5FVgnSsFByxUYPo33a1Td2te88s",
  "key11": "5ZVx4grBgALrCMqZCQd2uKhqwGtsmUPfxYTBesBwYU6185hkBbujkNSkCLGogiE5YTMF6P4z74XBdMUCgs1uBXfT",
  "key12": "2vbkbg9JPym8uW1n7fKuJxaacUjWTMkZg2XkuYH1q8gneQKoGasMCyH4AdowwVezeHs1BRouSwJKw8n9V5J3mkNJ",
  "key13": "5BfwrRLF57x5cazRMX9ZE4Hbw9VWCMP9zgrNaYTHvy31f2Gjtw3HbF6RqVN5R5mmEqakPP82GUaEMkEXUjSfqhE8",
  "key14": "2RSMQb7PdTJtfnCi4vjjFfuhvgMGd51AVrNfxkGmUjpUYRy1XVUm8UEXv2ge2CrbSdLNi659CPVfSdHQqD6QGrS3",
  "key15": "3WRXgcrEfVwQuaPkLN5rYFxJxf4MKT1KuXjnfGJMSt2sS7zkRjQFEeqNrywC96KaC81Q9rD9fAUm6yg6WGd79ZE1",
  "key16": "3TFLTq24QjBPwfdjZrD2zUx9NUUMytE4PXz78SERY85YMQHBqwbYybcMuecLSbF1yv3Quy5r8eJuWBiy3EfBpNb2",
  "key17": "3GnXQpXkaYvFuPZvWAJRN6eZcw38HwSMVyYrZA99GD4gsyBvT2uAkv7eFtDb1UVdrYgQerYJqZHe5fBRCzmnX6i6",
  "key18": "5DCzJrgCnc8Hid7AcXRSKbAmxdMn5GNuTYdDLpt6aA8qP19HvUCerWx2c2Wr5YQb6rRWd4DZD6SkxCJLERJ7Sm8n",
  "key19": "25ceyVa2Fbi1bRj6RypeTpaks9TBQr9LxMgE8uKtK1gd6gGmg7EZ3uxi4Vj7Uo9NTq2vHvtzGmm496vtVvjUnVsd",
  "key20": "PW4ZHQuEBKk3Trs8GVYwZe2D8uNh4SzLFq3r8j9Kdpx9HjW8wfdhdjKBhBjTdTsVcjYhWndTN59WfrhwftjZhWx",
  "key21": "vwa9JFgpt6w8rKMKc1opwmq2TysKtoPUywppR6LHeGvCzNRuiA5eg1kj69Vr35UeSEt3nogeRJ6dsjud59ozw3L",
  "key22": "fwvhjvvFP1M9B5ZzXJ1Um5SH7PpaPykD4GHtiUnzyf6Fhe7zVniX6AEKRx2362xwypEk9xkr1n91UPqB8gbU4Pd",
  "key23": "4aSaeNgiKreffpno1J3cSCgv4wNfMGapA7FBZZtKde4Mom3c2pPv8kpezhvnP6P1A19T9sHw8TQwqKz4w6UaJmXM",
  "key24": "2CUUo7nRof2SwmMaJnaRMaxbnMRv6LGhFvsKSkMJdDzM2TsmFkQphTQcn68vBUcAaF8qcmpK8QJsVpYswKt62XRT",
  "key25": "5i6pxwsWzS8zSuMdLPLPfg3ixZRU2YppWpYvRBBSReKPgw9E9eSreDW5nL82tMc85Kqryut9ngmdxTSTWsF5foG3",
  "key26": "4qF3HHxgeKWePKJ1y4EBDRx4G1zuhL5Apk67E81xfiVNHMSUzbZ6qAJLo7W6WtoqRTwGb2RVKQLBkQ9MpW86QexE",
  "key27": "5D1arHZfpgy2rt1skRPq26PWu9seG9DPVbczurF8HGdBFHzLYWEF32V3kfVSx7MF35enZCWii5PbvDchTBLBot27",
  "key28": "4eMZL2V2mk1Q1zFyvR5thnKrd1UXt7sqm63PyDKbH7wf5yrGQtVRBSCwQDnfLV7YvJBYXC1B6MYMtJPqVfq28W94",
  "key29": "2EZXNK9cVbPCHwv6SkLeKMotQzeq11fSk75V7TTYonDoBnMeWkBvZyCmepDifhY8hh1sZZjtVqsddocuyhx2bNNe",
  "key30": "2djMmTboct7UjuSuUVAZMoQoXvNFmXTsHHVAzBTKdDnGfW7Y4jdUiqsVBUtDrP8g5XUpSyp9Pm3C2GbdFbFBqEPg",
  "key31": "5NHRkbRxUYLiJoCTXnFQtejezGU1NwpfRZKsFWt3QXW46GyQBSQmvxTwva9rJEho2MWLmj4oSZ7sNyWzNtqc58uv",
  "key32": "E6UG4T8Mb5RBr4SsSNteXEZGumaiK9JFCEjAtGtrwVWMG2cVQXv16vKAYrW58n2NoNBCNu1SB3J8HexR14kCw6U",
  "key33": "FsnbYsZd6idhTg2hbwWHPmo6NYunGDzyAPArq5jESytetyqSvhHGsLrmfjoKAsiBnLsm5Aoq1nFZHSgrYSL3HSu",
  "key34": "5sVLGANEcwabnKmQ8JHHiqGjJktRNLKhDnKe1Yk6zX6aapFN8Cwhu3MuBmfruG5V3DsxzKDLJS6aqFFFYep4tbxy",
  "key35": "5ASkkzhW7YXvTEkN6tVo1oTTvzrVoS6c3ah57gB9uudzaPjQU5eNDR4uis1pCso1tiFKv612HUCpgS2ViG4Vskbz",
  "key36": "3LVn9noqR1n6B6LkW8AC6Re3vijJo5KWHF4yPvPPUgJcWDGf7F8ykK5aaKNV5kbFgcw8cuhCbq38uhtyybCkVqAn",
  "key37": "2VgdXCjjt44mhv2PHM7HGk8muve9PbUFeyrcF2PCY4hJ8Xo8M9Px5iXG5qLppGxuwmJaUqXZtmVp2zCgMdadPRwk",
  "key38": "46HHNJyLQ1fConLkuzVNmmgJD6EBCD4tB4yFr2c6nkfSRH4mYdQJRCeqF5uCnzwp56NREcHGDK8gu5gF7PbYp3vH",
  "key39": "2g9RGi6TtF9yRHYAiRCjBbaZQASUCr7GnDwFQfAp6MHThQTpJysYY5RCts4pvioVgiq7rnt11KmMjsZGY9i667ki",
  "key40": "5XfpxQ4q1JSy3S5RT6qQgxuxcp4x6sVgfbxuUDfxY8dpVTovPPpMK2U5Pz2mDfSfPGbAtdpZY4zg5Ly7w96HCFXn",
  "key41": "2skjG2hXb5wfggSESwVsi6DGeKke6ZBky8dNw9zCmLvLKRLgGM9S9UXQe7gP7QawmBm2XSgU59L6KrvwjEPh5vko",
  "key42": "4k4vdwhPCnVBCyhRgZQ2fyFXQPK9FjqEzmjDJUwejEYJBJCp4CGuAjCeSqbNJeHfoesrk5nb6uNWpES3kAc4bRhK",
  "key43": "4nR3rNv7ZacGj8F4jB2pcwuJZ94wR28EfS2g6nv2hF1xp42FkPK8tz9ZwocRdWDamtdMt1N8ENq5we9JRouJCU5g",
  "key44": "sTYVY9ST6pj4UZgo2EXeVqqBN6SWXrcYCtG1bpXu1u2iJxaqpTpGArqWLKt3tv8PRn2mxhzysC1feSbLTF5PaSy",
  "key45": "5EnAUFVn4LWEAawzDCe1g99NuMr3bvjgtbb6fKMavSTMektsfEAr9oh119vRkK6kGNeLk1db4c1Brcm7hJhobonT"
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
