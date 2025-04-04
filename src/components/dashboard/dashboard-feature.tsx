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
    "JGDATN4yie4Gj74ApEKKxoQRhLx67yPTt94945whmFt5UzTddSx4gam4yVPCbsutnWQaVKz2DQ2oGmw4P7SdXgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cBBBbEf6DakXhdRAonHbxMw9dqQcj3gfmTST93Ziq25ANqv2HCKb5WKo3dbqav4MEjNS2pYyCM7f73VafDpcVfH",
  "key1": "55NspQxc8eKDosvDVMNAZip5RvaZMMoWJKUHrCKDQnuwMqS3C2JVMd4ausvvUGLmVtA4bRUtZPem1jz7f2o4KYNZ",
  "key2": "2aNinPbxjhQRHK1ksYacfx3oumK3T2Ww7Vd3RbE8TdeEMJp13BPE2chKkCNpBc3pGGNw6MCsgDnzEgtQCBazCtn7",
  "key3": "577Kx6h68u2ADFR2tEQvEP82qBGFtAvnNLzFJyBXyZZwK7Ajt3YKCsnVXxK9Veoz3LkXX7gi1naCjxhVb6JFmjiZ",
  "key4": "3MtTNzyuqqy3G3dMUygnC5yVbxoYMwVXegsnCfhextdEnWZJnVj94sv7rTLkoeEHyEzDCnqH63UynTuhHBMnCuHj",
  "key5": "2eWrN1UFXLQNR26pTTy3yTGBmyA65eDoPpBQNmC4qWcGSgxfixrBwVFRq6LfXCjCGmxBURGgGogqVQZwmcESpPRZ",
  "key6": "3HYLbhaW2Epi3eTuaWCpcCTPaZZfHvtYF5Hefa58pLDW8H4ZuHRjzVGcrBZt7tJDoNM1XxiHT3L3eE7xvPgEyhHA",
  "key7": "PtTz7N3yja99kRdgdsaXdaUfKmydUDC2NtPFt872oPJJxKnFV6aD92diGjqR7v6VckhdBMvycxsiHfhCqafQfiH",
  "key8": "4Dm9dRdkaCD93zkAbktCy3a2yK4ebcS3nkjETk6Wog8v6FLrkRRJ2ubEsokDWFPXTfgxBBeeX8cqKdWWH55q74mt",
  "key9": "5PGGq8DvsepYGKQbi7gY1sk35qG4NbYoVxAE1yCSRyZnkNEUXUfDBLmgNMQVA7QSaCAoA79PsJnWn9YeqAvradnx",
  "key10": "5FBbR5RmxkjWMUkM7JzoA7WGJ8FFi4ZqKCZ9bdLfnQ3sQH2EeEzjfcPxVctkifyseK6Nd2zqiLFPuviBsi1gp23i",
  "key11": "76A8BJLnfSERTgmZmNwcx4d3YAVj3yvBmkES5KiYdiqmJVuNncTQbj9zYSkEmX4DfrgkqMc3EQ8RPLKe4Nxyu85",
  "key12": "5miGsJgDVxpGkotJEQrpn5fbkEiCCMjr4Qpr4oMzULhXmbQaKtPa8KQgagZz1KoqXtX8tfFHq8DXmS7Lm7Q89kC5",
  "key13": "3VHUva4LP9yVd5AnVVqoJg6EjcFS1W9cRGaJgHTAXtQqCwf9ecECkWzJLg7HQiek1qeeTTAXYpmY5ykLNQHThiNt",
  "key14": "3C8NMYbtTvohsFjmYAaVghVqAkJmsphqrjejJz7eTHHVqK6bpDMsT8R55EgGM39CwCxDHvuZJomHUSDsNM4gScoQ",
  "key15": "3odpRxVxLrh94Xwgch1b3DECrVDHw1vXb47v93tctnUvDbZQZNKUpvhFxCY3cqLwxawu2uTaZ34FhHfJobjzbpBP",
  "key16": "3AL1VhHBRi1Q6Z1qcXkA7Uhs5W6jp65jqSLc24ApLcww9sA8rcbh1BJt2JSW6qzKStaWqfWbnk7sNnMSozEwQdRL",
  "key17": "5vLgQ3RooY6MEJ5Y3SPKQGarem3YcGVrFQ4RPCHrMvgRYD1pYYerayxDaogxEHHNkRreC5yXmnpXZUHCXP3vjcCo",
  "key18": "5fxUYZqSfYY2b83dKa9fTfJ8hvSG9Mb4YD8vK19p4q7sZoyTF4QGjvbuXv6yJndFST9chSLdHPNrxpaF4rXWZgpM",
  "key19": "3jQJF7ipDe4XTnSMAeQA8v8vF7DvX7mDxsXuuhwPxjacH5K6aSp7GMSBNLW5B838nQfpXquHKnMWfFCiT5b4J75g",
  "key20": "29cVphWjF7wU7KVEteiBpUzEcakNf6GCc9fPMgnbiT2ztRSpmDWvni9oBRGhmfT7BE3UMBMb5zhDw3A1SfsRgBKe",
  "key21": "5sNnStCXvVGrYsj9XZgzaK8EVGhTy3nGxPnggK4wX4PiD2VMavXPt4K2pYQZPmuNPWAvdobJp2TTUS5ZEY34w7i3",
  "key22": "4esGiasBHJcazSCinG6Drca5gPVcJHZ5g4Sat3fgNSQQbGRAQso2AWsx4Wu4YM8pFKiU6pg2WorMPCUbguc31wgy",
  "key23": "3J8PNvruAHpaVmDeaPdhitvG2KDFWo89Ma7NFnWwgEi2T1xqRgZACjfkcWVyx15utgJtTDoDReyBwXF9aBwR26pJ",
  "key24": "5dp5sJUJgzXHgZEKKDXQmup1Prg4DqnZrHziH2Kjoi3dkUnLbQbMfHB1Xb8721uxzihhje3kaG44pbdVTsg52w2B",
  "key25": "2fiCSWxbWqrx2dL9aTpgP6H1ah7YhAWnS1Mj7nND2HJW4kYYFbZmtY6TGaxPx2YLxmpH8M3r6o2b3RG4A9mfo9dw",
  "key26": "3MM4Yvr9gnF3bhhoG17QeK5hi6dA9MZieyQbSCv1gfnZxub3f8Wn1RTbJLeG3uKdr8Hty9n2QxxV3hUqhJZW4JTf",
  "key27": "2QpiP5E31s6pNq2yq64LivFLPLXwDRAFCSoGn1cK9nrJ2YLvq6TW17FFWxVUoVfF6jFqittprdYjr7ujmoFAcvho",
  "key28": "43NQeSdMe95WpVM9u45nbySCFppvqDJA3QuADZMpVTiRTiL5pwzBbiS4vWsBude39beBJ3BxgE3rsSne1nWm2yvv",
  "key29": "3hwF5re2XKSEN96KQkQNRN2uPNy48aZ4AqHAJY63NxV2TYEZTHiMrbh4V2W6pWsYmx3LnDkxdGnBKw78QD5W9uQR",
  "key30": "2Y7DFdnumpA9cz9vxwFfFm5oLgqPFRUtAMkmby2XvCYGYXuXyFxriBackzc7baeKzVrSaHvp64LHNberVTjK4omo",
  "key31": "3pTZgKmJDAjTThr6oENig54WLSzmCewReif7hCDNquJSZcXr7WrWLDxSUzJUuz6Zw1gHNC5WMMuvvTsC8d7afJhh",
  "key32": "5L8o6ndKyFTnA5aph7xGWvgnght4Wf39YXVo7EjGgbNaPsUBmKgvyvGn8Ewr41MzXTdMVAM6gUBwc4xJFUgSQTyV",
  "key33": "42N3kTVXck5SNVZ8Ci4jzqDsZumrCBPQPyCxU3DaBVhcCMXzwQPceDpDqepQhkgHiMy8MFrPMDrmpnsbZyA2qNnd",
  "key34": "5FUgAFvYZ3eEBDgtERd3dVztaE2gXZfX9a4Pr9KTW1nBJxkDMbg4FSCdNFZDQ9MoDHWGgNDBQwqV89itFJvY4EC2"
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
