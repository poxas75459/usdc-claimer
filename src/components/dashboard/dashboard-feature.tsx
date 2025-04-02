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
    "2Vg6W9WqD9CHHQGFm2Dyi8cWAuVia14vCtvZREtLp1AoYokzDTMbhcy5XZ4MHv6dhscoyPZjU7JX4vAm5k8Bwpbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46PwWaSZLgSvUwkpKsU9MGhMHEZKo69aUE3VkbAZwXU5jzxqvYbqhridDWAY2DG9VzEv6VihVmLoUnF6be7cuHmL",
  "key1": "4CV8n1dBurjNSn3x2z216h2r4Spzh7MMaQbg8fRXkFVDFFhgu8SvCCL5NX5jEXRC9HQaNPdzQBXKoFp3ab6eQZeV",
  "key2": "3dkmd79HzKeJSTPg93DWcLixGgq9SQh3FyP1F6RJ8p6suzysvfhqpHRBqn61FPW2aMdgoijtm8EX1YtBT9J84EhW",
  "key3": "3sGX3yTWDsfRqS2ihPdUa2w28yjTdRhWTH57VVJLmuyZmJDH5c4rvCQ7sGnypdtJFQmosW93ZoGz9jjXPPfaWK2k",
  "key4": "4j5ufwKVeD59HB2NH1M9cqCLuAB1ydjjmxKMvUYDDHfyURQaQKSkLfPsQ87XewjBvLxECnzGNcZcfxobtBH4kDdX",
  "key5": "5SKf75j2GCfuYZaLSSyL4Hqu5ccAGc4WVVGsbeA6PXW1T4qaqUGgY56fa2SFyp96PcDHmdFPdZiyiii3THwtXPJy",
  "key6": "3gGpXkeAMFxcvMai1Lf2je3Ujxh6jiEv1oqAPE1xhLeK5oN9HbZWTW8DJLkfbv2qhyFBfUuH8TWJVaVC9STLWyvo",
  "key7": "3y3CGEeAc4Vft5BuHi46DzzsQp7ABuMVbN4RYoKNWjX3rQL3XcLpZNmjskikPjESLTGr98q2FyJQ2fXXFiPoHhMs",
  "key8": "48rqNfcjVJKf9MsZD3rJn8AKtoFDeh5qVR7SUYH8N8o98iCT5yywfiDnwtJD22UQ99xQtY9aUPq4QWw3WKvcPU5U",
  "key9": "2CwkBwNttDmhfoiwgad99HwM2QWXazU6QNwiKMsXHjhmoeizupRLz3X4YGS7BVYUVjVQorKn9HJqEzvVNMZEN2Qr",
  "key10": "3xTicYe957djhtYRCXprU3AXf1mrwYYAD77o8mnsEcoRVeo1KUAgQNoBCPxP8fVaGhfQwtYdM82uktXzVNhJtFuU",
  "key11": "4Vm4abFsyysyptPnitWD2QDmQmEQxx6aLRJPPMN32xWYYAUD5WQshSUf15k4LbAUfRWfXj8DcEkZJBAEbvvqsH5k",
  "key12": "47vCibNqYhvXDxSScmrARhZEYHuJK6akYjqrNuUt5aCZEatitv3TnsEiTXd7Vj2X9Rkz8WP8vnESBTg97g1EbYce",
  "key13": "3PsA6zze7DTmBh7z6hheBdxrhGskeQqpccEgw59gtfo2kVUr1bSUrZVZwsjk7vyCr3ondb8A7kevNnRmmfbnyot2",
  "key14": "2ufEZfc2JYZNXjeCjd8sVnAt6BtN9CwUGt959Ds43CW65FaX1bFuYoe5SkU6TS9uCkRbrk1DAzXXFi5unqK7CEKD",
  "key15": "2nzcUJp7sqJwtZ4DjJsZHuPSFJWv8wW2G3Gmuejv98wAkEkDue9e32oAYvFB7H6ccxwWePxPvoboy3FzQEDzr4o6",
  "key16": "55xFEGyqaLSSWUeRLAewbhaQ2S45muXwifrJUVSMZMvVw2YzEVCNG9zwZVUXZhRXixK41PvaEGWd8NVdB4xGDbDZ",
  "key17": "2Lx9CdFDY1epxRFLpDW5Hdf8arqzPQwcGYKiZWwcLNyccF2AQxbrXgKVSgggWw97KyTT7Yu59eVBrQ9MkEYVu9JZ",
  "key18": "3VGjosVZDkEeDBYGPCgBEiz8mrDgPvhBf7MooS5ge5VCZ1pattPQGKURxRdYBYCtq26hEneiXtsm36Kcu2XPCFBD",
  "key19": "3jWwimyoqLE37tP5rHABuY7hWDBe89rMEaPz3WcmizeKbALDFzEH8Ey1qsxSFrxLwts4g5PyLzCH8FEkZcPmwD2x",
  "key20": "48N7cnAeMKxfmCJKfFGtEXFxCK5HkmnZhjfrTMDPhiPpw1DVGBiXeKL5oAETmYvu9sb1sQ5mzN2rUpa6ykzJi2vN",
  "key21": "34pKdRJxSarQ7NrWjSeqpaGtpdFUa48SazMyGuA4jqMMPwP6kEQgKycffiWom4GmHmpNDbkG6A8AugryPJ99KCHR",
  "key22": "5R7c24SxjaNRZEWK2FXYR8Vg1QHDHanYiomQ73y2jrS6Yu3jgj6vrA9sD8yP7Yj9Hv4W8ErDt3wNbA77FNEGp1Mn",
  "key23": "278s61EYF9VQurK1bqdMoLskufozz5F8RrVDvTVVDP8DuetcpB13w2oXPm58vgDixaJRfWnPUR3eRhjJ2QeXF24H",
  "key24": "3PQY85hYfEzgQP5LUa9mXSmeA9K5pK35UKHeU5VnqQm5tacHWe93ENDstYFu8ayXXJYiQbiypYrmSZQxGT8dny8n",
  "key25": "TsgH3XSmaanBc5WK8sF4qvBwn5EqSZWjky8WawpjTYzFJ2qAsQnsAWsr1sc7P5Trnvij8B7u57BfwXtJ42i5WZf",
  "key26": "3CxZMLJbj1Rp8bTf28y2wupFqKYcwVuTLRynSRFyjWns83tYuf2oaADdtexuXHV7epaWo4Fk5bquuwQXpbiTZYim",
  "key27": "4eXugJqVwXPmxG5wvQ8VyWJKBJABiywviuJnQgK4jfk3H8esNNu6JgqRuZ3WXpSEtDDBcHNJDviFTCQHNLwqwrTn",
  "key28": "5yeGPpoc6JQk4XpPvMUrtEpzsJ2pkipBaEeqktoZwqqLbfpoHB8LXcjLGrTh2Tkjcn637gSmQeSyHBd4zzBZGmxo",
  "key29": "2CBCwPZWwe8ugQhRtCidXGYAMyg1kK2LgGaPqKkNXSyoVrDmEZqnRLagd7v8vyRxzGtWK1vJybQp6cKCvURZDJP1",
  "key30": "5tj9jMoirnDDiFJW6C3XRi69d4SDrjUGoTNxMZPM1DkjB2kJM4SdtxKx9bwQuTw2L9ov2SN43oY2oTbhqjEYgCfM",
  "key31": "5D1DHz2dG54XkBgsWLdi8GJXxGq2YoerE5XJGDBuJmfiMVsQuXxryqpf8h6RFPwsPTLTi1J2Tb1ENyYp4nefG9g5",
  "key32": "LyJh6HTsBEDvkVHo5KUMBycXTNbdV1JCBoStvYLq9aoPpCQyAY87ohzZcWCZg4TKjwBmbA4uhBSvyV34bp9Ep5w",
  "key33": "3wZnwhAFwCQMBr8dsERzS2LBgkRqxJAMB45W2K47VuJmnWPqkgh1WiDpw33Ehf8kBsiaHwFCW3wdPsAJTvKNTfL5",
  "key34": "grSL7KyoBTAiMiiuJv3FFBRGNPrpdHrCBKoae8349FunYgENAzhurABV5b2ykb4kRSYjYKxRVFzTRuuUouU7uzG",
  "key35": "5mfzWZkDa4a4pt6qNPsW5FyfU2DY5mTGUYxXzAgFhQVPTpDUwEg5ZbeYqVk5fBJMiFVZzNRV2VCDaA2bNL7ugSpB",
  "key36": "2W2cRMYzMwWuiYDi2jarrfGF11NqxR8b1G6sPp3biDfQGmpM87ciC2RkUrWfbMtSEbW3bsYWYn4eaqgqkcxjPUQG"
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
