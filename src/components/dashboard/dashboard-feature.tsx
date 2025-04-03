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
    "4aTyVM6RdS8b6MG3p1CDbEbLzwbuRVJ2mKtnJTYL1wwWtpBfkFBqYsZEC3VrGr1EChB8RdNtBVQHWSrTNzn4PVKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DriWBAJpC1YNq74mSLgFq2KrrEf9V5MyipcKUoimyfUPABCFzFwPX3CtsGs2MXVC7usrAYwP7hVJ6eB6MNSfGnn",
  "key1": "21SZXj7tRuLqmg2gvDnnsd9mQVZk76HspyX66XETTsY3pYkPrNWkqhTgAdWAtoaxsrFZ9xm6Rf8LkjczTKJNRegy",
  "key2": "4XsK7ABW1DwvnPjtmGJsCyiD4khMXttK7ifQqcX27PYqRHQqHS7RCV55MgoYGNcY4ypKrreEf72woP8DJE8uPXEi",
  "key3": "2KbRRZVQnGaRb2AYfsvf58HvtgW2BPQcVkrper5FeELvqHaGu2gvdv6b49QC4bYBYodDjKd2Umu3F2rmY4dSwfuP",
  "key4": "BhrL2vhxiC3U43QpgfucQSoj3sboffVxh64btiutmQzJvgx8WhfrWZa28hcG4WTaweM9UV6R5zN96yQs4nw2dgi",
  "key5": "2ZtKj2vXCExofdXLYYxEzWEoTpJ8EoumYyQUxmbMegHX7J5Mqa2wGzLAKDxLJCuZsdQu7WzYXWukzB1QtU6MN7ZD",
  "key6": "2Wircgc8CeW2w9ZMXm4Rd4EWHGoJJ8CwmjKiGrBionykJcjsSZGtAxrXwP2CWJKDDrvq9ZMQxmGEMdpmbcbGtVXm",
  "key7": "5wzcbdWQuvCrHXAN3qc88T29XoeBXddohqwKYpveSe9XWh5pGe3QWamuueJkLXwJyRKyAuYq7L7EidoF429VgWee",
  "key8": "2YKfC4yX5zwAJSH23auPASF2UGquHPz16HUcvhxBKP6i6rrQhZFoWqkC76iDk1w92sUAmDJg7sd5DsSVnSQZ788F",
  "key9": "3iECgcFQzKKEsvnQjHUcoBaNyty8rVkP4FJdH6rEau4AaEfoimvapdF7pAKagKU2Ty1uzDD7nEmCxeLsi2aByrUB",
  "key10": "37NiLFHgRhHRVBAzekEdmUqkarNYMFg87tQuXC6Q666nm5KRCNpqikAKW5DWd582ZmNoxFMv2Exmdgg24kdT8Wsm",
  "key11": "3xczLphHwndWw9gPbS2bVkoYVm2VEAmPhd63bcvo9ZZ5zFJaZGvfPQke5u4uQ1Ta73dqEYuQP1u5FGzC7PiqauY2",
  "key12": "MmrevSkQspa5CKAqkYfzoHCWrhz5YiHEAWjtVUuyQEoyibz5dkDiDYprdLkVmCrCKpPjjvMigypqBe3NGFSH5QA",
  "key13": "4aKixPYNBzFP13Eqo2TQGp8uH7HNmfeQY7n9CSyiaJGkxPpBREoTHDrze5RQUVq44ED98f86N3Uob2xg5ifduG5D",
  "key14": "4arhHzBkMqQk4i2VTKtc5FawzmvevLjRBM6odsTK4E3n8Wktyq57bYpDKKxYw7aXMfNuLUN96QGQGxGgA2dF89E6",
  "key15": "3LG4pkR73vwd4YCh65VwoCwYppppCb5bWnEfor2MSZnuZyWAMKiHWiPNeM85yr7uTcVMYpouiFjsVHJjy2wNWWWq",
  "key16": "5HHEJHzoQ8fqtArLBq1Ty52B53g4yZywE6aeRcpLz4EpsNhbKxpzj6zdHo39YrxJhwSFgwYaNPVEskKD17iRVYep",
  "key17": "3JwPujdrhdWXujUBGs1S3hoBf6Jrx53zR4qe1rf9EoL42HZoX5KSQpdis8qRQkMF5xAhDaDsnZnR29oALqHEa2xR",
  "key18": "2Yu4U8BCU174jAhcf9e1U83hAGTytHF4YjD2yUHWAuKaDSfD1SceL7LHpC98ghwACV7jeinBhrTYgebiFUAS9TSY",
  "key19": "5TL6nk5DR6VPhihYtjasLbpbp85dotetgmQnezNFzkCMDn7WV93D3FbcGBx5heMdAvuvPqCBLoYzXDsZ1rbYCpbg",
  "key20": "2oL3M7TgVCvxmtcVn1R6MNzwJLP1rhvmoWeNomHiQ1pbnJPhgRuDRdAFgp2yY4AEXrusTnJoLtSA8RKQDvQXABdF",
  "key21": "Cd2EtvZCANq3ABbDe4EXp8q5cB5RgqQsioRgUWTLUe5hfox9niMNxr9m2QPc1NH9buC7grUnG5CTgU2nRmUc8Wo",
  "key22": "3NArpVShMtF5MzJeEknfSisyyYjiEA5MsPk72vRk6JSdsGHjaPrWbmNVPWrdMnFNghB3WwdSfFPYEpkkXap4Kvds",
  "key23": "5grFBrSki8i49gYVG1j379CPpxewwd3gof69x6zKVD632oRGqQhQxQQk8dgTgnGAMK7ZuCXAS4GsWhmbmAZL9MP3",
  "key24": "5C7MNb2GF5JNwZzzYe9RPwEvKWw1xw1Ek1RZSXTFaYZRQ8ucdPRfZbsMsK6EFJjiXsjLmpDRr17XAquFkyuuWNhZ",
  "key25": "3AwKKuRgKi6XzfoPUxhqzZkmA68f9YLeMz9VRPsbCt9MHfKz2jL1iQripQCo3G8XvREc5TAuf32JurREovrUeAdg",
  "key26": "2JajWT6LJKfswpsDdnm3ECVid5seUSb6NKEMYRoGCmGJw4Fwibv3h7du8zu5cn3j1ynZhfYZtTpxeW3xNLNtWBPF",
  "key27": "4NiVYTqcEYyo7mkA2mtquWbkah9UYHzgcPyRUNCFHgvPWFjTARCUVFtgMoFL3ZQVPR3WZ2RBMzwZh6gERArYkLrV",
  "key28": "Ui31MJaRYH2szLMqmdL6bdwynzH8y1Anjb19sqpnDvPCLJUnV9gsJgCgDiNZw7vMg4XenRspFN7WS6UTtvzHM1A",
  "key29": "pybXK43WjbR2bd6nnTYVNzVzcXcxBbAUjH8iMTEoeqK7P1uTB1FvPFvM2k31pLbVLen8YGhALzuXgsAmzyWa4fb",
  "key30": "2Nab77hKVmYVeSd29eWftsuzWvr6BrygUTrqZawZiC6Y3aLnsXdDodKZYjBVBGG9RBMzSZpMM7oXHEArpJY6UM4W",
  "key31": "3hshLyYNNFCD7dFUN4FgTxR1aF9DBW8YL5VYVXd6Hs9jGjrcWSZLGxezY9hmhiBGpFG2umy1yUAeTRqcQ9ruedXf",
  "key32": "WiQyrybPgXhDa5nhmiXW7WuzoxQ3EfNaJHGabwYAmxJiuXoDUmYMQoZqnJMmRafzxikFyWDA6FoGGzouzh28VCY",
  "key33": "ZBzrT2wmBc9Uo97cp47Q96MGsjJY915Lp5F3TsMh4gsA4pPMHXWwVexioCzn5aVqGWu6KaDHzWauEp5frL4QMuh",
  "key34": "3BVEdNFXBBhagxiCTjNuAVtrPtDQz4q7mCCSGkpEQP2H5FRA2KsBe4soebGH6HEQPuHub5SSm5hk4RG9N1Wfw7vP",
  "key35": "3gZb7hXabWh1a5joCVnaGFukxw5fNkKG6z146beNK69wS1gL6NoG5oV847Rrbey6RbzeJ177grNS5jnrGGsamXnd",
  "key36": "XCfdkgmF6PTa5jd2X7JUE6AqT3PoNiFTmHZHYmqzoSfcyeSnXdjiQ4WKU1Gb7etNV2UT1tAa38FKdFGzCfF2e3N"
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
