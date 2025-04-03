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
    "3D6i191UzMeTsHr1cvheEgEXFx4btRQZ4hc7atgbJgE63NX4HfEi3LGJXGRktxm4AGMRW1QgdSX6cKo13nUoBps3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3AgxCZFMNUo9t7GomLpRDyh1j3SU3HQw9qfcSRid4ghLpovkego25pew9QeM2CBAGSAfraEHWauf4kUpoq76Cz",
  "key1": "wtXooBXWFRXB82SDxH8g3Sb8N4NH5hDUTgtToSSJMMsjyrfMj9cmvMC47ina254TaMcwzH1NHiYYejXb4GhbgPK",
  "key2": "2B3B1QvAmsVdxACzCLtPvM5DV36dGz1eRaXP7ds81GvLWnd8mBqh7afdsrz8qMmR76D5qi2iBC3NDoEfJQBwaK6e",
  "key3": "5DW5sWBeo1LkuxW2Fwwv8HpCCZwxCh3gm7Ehedk7tUmwQkbX75iLU9tZ9wExYLzkmDqsuxFoeuSYdhcK6yx7huE1",
  "key4": "5nzrsCLxjSP3W5hNQ2xBUs6fhzbhWGSs4XzsNr33KNpCwiLe69jgpcd3CBfLizeuPWPdmwE9XQomPPLgrNUEnUVZ",
  "key5": "39KrdJwwQyAS4GVpPqttGiyH5KTABeYjrjLPgxda74zXE6jzDGKBhu5D4e8qEPa8TEo5ov1ejd9NEntPs6VxTN1d",
  "key6": "3QhNQM6uSm7Sazce6MA7tE1e6jTxmnQgDWHBBPm1GdXf2WQK6QwY2BFzh9donxeVDqjMTQPi36ixbRUJm3YCxXLv",
  "key7": "4g2q1XJFLSBtoXEGx3R2HmPAC8SM5WQcV5kw1NuLhYMF3pdzPYCJ9XswjTzctAaGdFarfHEn8fHb1cpzyxWyGRq8",
  "key8": "3Kk3uLrUeYGBpZ9ghfVneFj1dQzBwLycBAchkt3sJ99sDANbgLYyrGSVsuUYtEKrFQBcKEyijFTenVZetMgwhJ46",
  "key9": "4SeWLWwGASUYLrj2eau2bWY4GamTTu9fxSCYAEEu3yQ3DKbPZ9UYPhAxzkTLNukR3Gsm1obaeQQsVvaiqum88QGF",
  "key10": "2x5WMukwvUQnDU1ZybDci8S9aVeN1ShxJJHmSH7dDqJFs87RByxR8MhyBsMHSEbBAdKPwZTJHQgwXajpDHpc1SWz",
  "key11": "5uRk6iWaZvpr356ie4E8iPNpAEMYzSkymWe4K6g6sdYgPdfww8GJQJCcmKaqUcSsqGksxsYnstvaWv5xmknfkgy",
  "key12": "4XZJyXTUaDjvVN1tEcK5XR17xJ4YVN3gwLdUyQyqbNodEsnBa1SoQBSTHcQyCiP1GvMuhiRY7Y4oHpcq1Yvbecg8",
  "key13": "5mByxFenrWtuyPcCVD2sBDjUtmcMJUo7K1rQLsQq8nv8uFEVtUFb1FDpX3wqPtmhgW8KYFEoxqB2ESWbg1Uga8rC",
  "key14": "2MZkx357XV8yQUtBC28scTwtJKPZ3xdMjQDHnGRvRoDHGsY8ioEMJjuVYS5bGZMtMXuP8n1LNre8yyv2U4Ugqsy6",
  "key15": "4MVnuhuRJqB6BDWGmyVBWLQBJNSMCthkqexM6T1K1LyLu3653Q4FMMDSQSYTiH5cV2X5pxhrgZFjBvisLb94BgJA",
  "key16": "35TAi3ZZyKn2FFc3MKSPgfZHiFTnxpX1JsrvC8kJecS3kmo9EB3gE1Ygu1BSGyq5f1twE4Gn9sevBsT1dLr9fhZv",
  "key17": "XcwT2BRgqGSfuLqemMpFK9dudF9irkyPrawyQShgkcQ6NfVn4Kb2gP5Q5saYidMhiwqCNwvgBTKdZHXx1sjChZ4",
  "key18": "38XaS9kAxi2TDYC1s6cK4GERsZxm6c9LEBH4U83TTRNSW5VBpqLiqWQcNPgr6jQoDv2KH6SebfcT9zuJFKjxUTtx",
  "key19": "57iDpuBfCLynd1BwJWMzaHU3VQiHhyHgpj92pVkcAXsvmmeVQyjrjdsWwoqDq8FFMT2Gs78bGfWia5GPx2LjQq2K",
  "key20": "3LGEs4dtdyob7KhXf1vQ8zTUWY3NBTcTkYvZzx4hJuXi4ud7eAvjvooPwZwX3ipuxAc211RNAHgrn4wXVBXnsf7p",
  "key21": "3V8NLZb3ySzNFcHNrQzi2AREqAiYaounwbKDMDva2td2RDxFAykCFBVgp1uT2RnsEYqWDzrwRT8pMNeW54U8QBuv",
  "key22": "5LJyLukbeWUPUUBgw2cFmMDmNiaEa8xGyfGTZ3GBa69K8zcKBjim8D4o3X65djc3ckHYTthQLtBMPLhD7izvEdQ8",
  "key23": "3RS4SK1G3H9nu7D8XnFgtjd6pG9XRik7KvVQDf8hcCgNe6gcDR65VVrVXN184CGnLYiLJiptRo8jWijaqSE6KXgk",
  "key24": "2cxVgPTBb8Dgr6gerW88UsB5Ds3v25uZChW3E1oxoiyUtEmg6djM9Yqh6dPhC6vRbe2a2QCZQCGTixoUrMbw4aWD",
  "key25": "2t1SUGqqf2jrpc95coEWDZqCATK4TRvMBPXRYSgairmWDkrnvB1pp96w5dK5J3QcoVdfxdPk2BW2ZD1sEXQgqyH3",
  "key26": "g7G2BM774nyBbcGnTUpgnkJUXupuQVMHzMCvczKSXyMyucBv6fpwJiewka7vf9b4oXam9HSgptVQC1h9B7RgT4d",
  "key27": "3TS8d1jck5iVLRJcTZfDFfKpoggkFwbKhYhGnt3fHMGifxehZMMQwpThaQp6ykpoKG2ymZSUCmfSFNSj8D16Rqq1",
  "key28": "4gDwc5EdGaRGyoC2P1F35rMyF2Krf3YCZTkEWPys7U5ndYFmeqjFhyyRncroJcYU6ZA8CfqF4FRue6fZkDSYPYDk",
  "key29": "48YGF8LJrE5sZQkyBZgtCwutupBeUgrrg46Fatz59wvMPKmCqm7NLWjUbcT9i2oTxK46Hr1k3SB8W3mNgDjdciVh",
  "key30": "3QY55PQJJkHna7X9iVU6j3mhFJ52hSp79tpNepYLG262yyFkVA2rwQCQa8Xsvs86bL7HMSkV3vb2DjT3Tc92K6Gn",
  "key31": "3WChQoca53NCzdAL6DZ7HUaXKsdcA1sdAjMygQNrRgDb4mwKUsndBHtCy3oRCJaEvtZwDRTycpCWjdHF3npZcjud",
  "key32": "2KDCYxy3NUyrWdqkQHGrPWxTnTjcvkjkquAZmZee2RgZ1kvz4p4RVq5pm8P9gub1fA3Ef3sHyzgSZSiDZ1Jfc84",
  "key33": "3TJHenAt4nf8Ry4Q8k97v16TSW2FMk8jRv1eWABFakNhZhwhypQ6PZj8nRcRmt5ksGgP938um6mGuJS9MbiWvgh4",
  "key34": "HqEwq15iE5KQ9cZGRNWbkp7HMRp6PAvxt1yD8XUTpbagySp8MWr14oYWsYw7amSGeTrtbSfNo8ufM6XcaAtwZNm",
  "key35": "3E4YBsBWhyzmQejpCkrxkdLZfrrrdvcoRKUaJ9FKaBA6MDEsa4dfegwnnSgcAppDjHQgmZG8UaD64tYHnsCr6hb3"
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
