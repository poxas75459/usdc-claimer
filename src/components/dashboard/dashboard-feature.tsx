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
    "5bYFrhaDVEeFEvfjw4Mu1DC1hB2wqbMJCtErgbZUnTvCPMNRzk6LShSABeFFayPk9Kq67S3cwqiqse42ZQhMomEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxeWeRWxgZoeQN8wpL6sENQwogfFYGQ8LK16gsGG5ZEpiB56DKphbSsB9FNgsLoTJiDrHQfa7YZDJzG5bi5tdG6",
  "key1": "4jcwnfo5NxWGTjhvEpwuFJnE9ekaB6aSdbuqaHnYZAEQhKGQJQyq1Y8JQdojQJZVFqSKXkrTYdpBvMWowANcGKzf",
  "key2": "5D6djBHvs4fcWessYWS1Ev35cgFXXQijYSVJmoLW7bFCHc2kajf3AYXtu2tgYKqUr54etJaUsvbPjm9Tdj598xMu",
  "key3": "5pUDLrvmpA6QLFwhxZeJxYbzu6hqse1yYkCGnjfFrYpB3i1SsZvp1Lbdvr91pch3NoTDiXYACJFvDmZNacQyt8HV",
  "key4": "3ZQNctW3G8UF5ghiPQk1myRVLcC9eyzKQvnxKGv7NB5QTXNFbhu3dBnxUQKETnaoyhPztVedPXcGT6wMD1xbM13w",
  "key5": "4WgVzeziND37W6B9oD2Ad4MR1VFCzBg5JCjaUz2DSRAPRGi7BfMDufuxir1hoakj6VH4CYCKuXAKviDqoTSkQNno",
  "key6": "5BEYRD7pNStBYig9DN5G3czLdnEdypJMbTQ4doMGoRyeiiXmspW4ZAq1cTvG78FAf8ykrZA2uc8yUgX1EoR3FybZ",
  "key7": "2DRykh5rRd3Jo6U1Rgt4UXkmoRjGFSpRV57vdLbbsxA9y2TWYXGqV2qmMQAP2qWVUzQ1fd6XgyzPrpZkBH1eoS4g",
  "key8": "4MBhhJuYMCpi43PVBB6Xp5ASpZBeV8fbdPMorSv6bd9c6TRnCoj6J5GpTwP2CBvdmJoNi7fhq1cXfVarxSf5e2b7",
  "key9": "62D9E3N2gVSzYR6rgiLakvoUyDQXrPwDhy6C1k6s8Mtv91TPEHJ3BeyrEZzLvXsNQBow2KEsMeRE2bXiFh33vp79",
  "key10": "64L3nrMrVqEVyt7T4WGLJnVZBRhYhp4M7gWa6vsEi5wNGY2m3r1B3htgJjVEkjijmcb7dvKcm3VMz3qVn478jXPD",
  "key11": "3wXq4YBXoZWCMuD3fJ71JGREtgkHjTDmRzXqBmp5omYnoyu4HXkYrV2kQ47zr4Z51w3NmLL36r4ffp7Q5Dwp7Az",
  "key12": "3KpHA7SmXJ26cquXBWVqJ9a4inADD4rbTAvw6okYnUyANTAKRqfX6wsdeQPuXRkbibi9gHceUG8KghsfKmdnzAzU",
  "key13": "316BSvue6VqByrCBYTajQguXqpxnAwwDjwL3fcEiooVDzCj2UMQuNPyB1tgSfZbiPRvr9HKpYn83WyFnHYWo8H25",
  "key14": "3fJKZyJmuQE9GKAJMjp1MGjBK3bRFjYwcHxsrLCCYnxsBoN8BjLC4Bf1GrS2wPZCfqdpmnBtUCrEopzcxtfmzduz",
  "key15": "3bEHZZMPfCJtUBYTW1GqSrCxY344rJRS7SKC3FREzocyBE2Hj1eZHDp7Ycya7goJ7F6cRxdodhLpqoUtfMsnC8EQ",
  "key16": "VoLJhNBHt3rtFouZ1uq11mxiC2JLJ3ughzNr7BTEUZq9Cbn6Jy5n9aTrpPoyJAWw15k7UM4E8CxQvLnoUo4wV5p",
  "key17": "2jvZBtBFZP4Lba7EXw5dm4Y7zcv814bmjVEZjXeWX6cMrdnsV4b1fcZFFL7zxTNERbPR8nhnga65WEDhajgogvVa",
  "key18": "21yyDQtcZ2xjcs5Vc1urrQqwQiXwXtVRxK6jycjaYpAE8yUeqPgCzKK95xWZaoWqacPT5PNvf5PaGtUDY5LhtdNo",
  "key19": "4sUc8kLYjbgtZowpciEv6Vd7MjyyA6UeYYp1NhTPCBm5yEzzBHofWbxKQ4CopHjNQtaN152BAGo1QKKK1nk68GTa",
  "key20": "3pJPa2DwcdqBRQPb8ncJynFJbhtEcUsfeoTWovDNPtwKj5FqygGbenLhFRb9dDYJVWcVgmMxkzoRDjwPvXZ7VWpW",
  "key21": "3L3PVEdjtLa5kZvYNA4dGvpR2qPC1xcuhq8NNRZLckvzjLzoT1r4DKMHCuDnfogZvJN8Yu9i1DhAerWAFRHmfB8b",
  "key22": "5B6D8prj5Bg8y9EWZREoRW5AXYURwsJxD8ZL9ywrGxxzcPCBREFUGZymzek5RFj5F1HTpsqRAN5kpNstcfEWy9wv",
  "key23": "HczEF95wmewhmMtdsKV1wLMfpTvcTzRoRdESJQ96H2bzHR3XbGC8Xjm7motprg8cRa9cPUArMpXc8LuukrZzv47",
  "key24": "5yNKu5XcFJ5QUkKDVoyvNgtybZwi58W5H76otLf1U5YKSd8FiVAhoVjyZi95HYT433yQjM7BvYBpSYmpErF9BgaW",
  "key25": "3K4p2XNdJ8yNtYRucc2F5brsCiRTy5c2f4TGJbbLDoy8zkPVZPCfN4QKshzYA7ispyLDioYxiSwsbRAx7K1EYfPp",
  "key26": "56i8oyunuzTMoaCN3f1r7dBGKnzrsup3RLAWNMa78zs3WyuRYzVxKHTAXZYPbRxbFCHSJLvr6e9MfVzaxKgBGu3",
  "key27": "4S6QmFWU382mZwqUj8ycmDkzqBw7ubttbf4qSCqp1JgnzX6KftuXZVxCyXRWv75jkSi68oaWS23dJcK451dTZ3Ko",
  "key28": "4BoYvzNhdKyyEGWPBPyG4yg6j1zoNbDeyBmSA93sMdoAMGMpCBF2J4qpgaNDTo2mc63gxNdrPbQG5V152JzEh5Dk",
  "key29": "hNJS9NMRZ9MgmJP2bW9vCyJrbcXTWXAjW3yaVYRkjKx8ysdGACfmn9HvJuTCnkRxQUnYmmpFTet4bSNzhMPqhXs",
  "key30": "ExydmDQqyH5Jj82XaZxoDivUAC6UQjLYsb9iCDekQbHkhJz9k1zNtU8oTkPPpzyEHLxMHADv49FqHPqo9HqpMtj",
  "key31": "3Lt7ujbey9EYoz1M6AT24dTpvVzJakFiaD5mLLhGfs4Fs3wTtxoz4ouBXfr5rKhUZ6eEbtVTmdms2AbC8eN2mk9",
  "key32": "67rhR6ApMTKZr7p4dmgcUzQPrXmHL7EwRfGSwJxp5NZeVYwGu37BiRPMqMhZrdgUdA9RXaS7RdggTznHeLSYVCrD",
  "key33": "4copvzQ5MGMV77eNcgXzuRfB2vVzqr5cDBxCN1LtEH4fJEPYLkHryiGcKmgxeBkuQKNkLWPdtmybF5er7DsLVaJ5"
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
