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
    "3dcdrwvKCRdgjcmrMvGVDVTsFqt6ZkHWeUXHVQHEN1r19P3wD3ApjevwHrKPvwP4ZDLnfucXx23HrZGWW9Ufeq8W"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4DB92HKWhWY7xcSRL89tRNYvdXE37yoAC1XD5TxoRi1VCynaviKBq2y4xSvMuJSguqyabvb6B5vSov5sU4NPWXTc",
  "decoyKey1": "xSqWXVLQrUAG2H5sXp5CyS1R66VMYV1ALtXWcUkDhGDsYpgtnDCe8jDvtH8cnFHAcPRg4i33dG8naG2dbZSFZee",
  "decoyKey2": "4Yv3KsLfmV47aXMh2b4Wv97dGBwYszfvb1TTsMocdMqsQL5xmVmeL6UbZB6XAKTVXHG1ZCyGF4jpdShHEB1rXPSG",
  "decoyKey3": "uAQzRKJrZ7J3oAqR9esdWEG9CS8U45vic4VSUeWnXKkEd8fkCN7x9grT7Az5PDr2YyszZLYWboLU4EkykS4nDMg",
  "decoyKey4": "3GHBYDyXFm4S5FUbuhU3AzcBstEjXmozVUyeuHEaNgKp987MJVLqQzKVfDjbYXqMNMJLoaLdMb3TShHJQdcCgbww",
  "decoyKey5": "VW8VjPrJECqvZD6UCCDGfZaYQJKBx7JPF9SCovXzJW5pvGkRBbN7BfTTRueAjWiURG9rEvi3n4Gvjfe79y7YXqR",
  "decoyKey6": "UnRNVS9FvzDSz4MXTka5NBcYpz93ZkMnhssNkVhrGUMeVzNhTFcYsLKjmFex3E93RkMmJWkm3rGDWuk8oF4qP81",
  "decoyKey7": "4iYnvejs4QHXLE7FrBFeT8y2RtKPiZBWzqTRBmyCQEbDroQ2oMmKFJTf6UPcesB8JPtiXWuyPPfpLW2s9GUetsS2",
  "decoyKey8": "Ybtwv6CmB4KqUxhSy8zwoDCpJd7m8MH2UUNfxwCRad29KTjCRrFo4Td2i6iYhihag2rpWPWQCthRhzvtQxdDAJj",
  "decoyKey9": "2MAxaQJwqiEPHZsg92EcxN4eWLLLB8bgm3nYpxDKBjQmAA4y5H3oR2595yFDaXURkqkgxRMu21VVK16src36SGkj",
  "decoyKey10": "2c13Jb2VCQDwDpkfCgr8fBuLoQJscGbdH4W8ZRzEh2gc4VcNqskKz92UwT45r5cLTqq2TKxUJaH9iRDSY7zjSbPD",
  "decoyKey11": "4u9HJyeA1S1QorVX4rbtKwKCPuhZCLgQSkzDmACAy526yWWb1YgnfTa6S7ivFjkA67t15nqrPYSfw5iSkUyLWYn",
  "decoyKey12": "5UqvW44r7EAy4rA4hdP8tKwZuZmMQSmt2asqJPkoRbksjvBy7q9qqC4RpvCwnKhtqaWBYLdM4tds2E2q48N1E9L9",
  "decoyKey13": "3VaaCmGfkrzbQtRyEBzgpwN4NVX6NwaAos9RtRThHtc4FmLosJaXCbi2BC8NCxvQAWZJRttbTKSHNTRzU8sjKerh",
  "decoyKey14": "46sWg7WPYCa7W8jknE8ZPDTBbPSmvUbaurGpmvtGTCL86aQXLgXgYsvTwScdTY9kadSNAxExjdC6pBGavBa7sGv",
  "decoyKey15": "2geMBw4q28Xo8Vo5QvKgHjfHWV4SwrHtF99yYKAkycf4m9gXsuL2R2tVAfeRnTYbbQiBS7NxL2Ndz14mxPv8Ja2G",
  "decoyKey16": "2cr5U9S99yCtFS77uZeuiuTd8Qa2nxE8u8tA5Pm7AdBPbCQUbgzegHhDToWDduv5hrGfNFucpxrc5f1Q9KQRaMjc",
  "decoyKey17": "651oQTmJi8r87mHtgoWcBxhgbQMigtkKv4zTvAj4hKhNKkCyZ3Qq4mfmpDUnRWpobJKMhveXxbvG24sQvuimRckC",
  "decoyKey18": "55huTxEiVCKCRysaA6jq3fqHXQWgbaG1No3JJeYyjP1zQ3pUV2rVhpNoYpTnPRDTPTvawt7P3rudPKu4pCLAVjbx",
  "decoyKey19": "4akA4J31PECVaN3K6yjwawUZEdAscxaCM3SBwrdj7Nqw8QaFi6DkS9uQwYerwaczZYyejRb3SJoQ2N7dUgExx89X",
  "decoyKey20": "2ftvv5Sr8KNAUGEnE6AAWd5vZGa11MAEBFRqqPAydXw7TxEDLkDoTBXQ7iaWkFHkx4H1FgZ8id1KZBwHm5S9Xtc8",
  "decoyKey21": "2LL7Rm3185kDf3DGitYdRZxoGQhdPeuVq8oTaA3boNquT3tsiPH3yAJSbpqTZyCqaXACahpvrSxqgb8HfyzrzLp",
  "decoyKey22": "FFvJKE6Kc3cwskzaBAAQnHV2L7qWwwRRb22qfiVQLz5ERXc5UL7tRcEWKsCDzL5roqZRJQmVCqKGdvJEs5mo4et",
  "decoyKey23": "21azwMB5ocnthNQ4ffQ6EosXEe4jkkP4FUxjfYSUtEoe7sVqyRmwmDSfpQsD2qRB5ncjSG4n8zk6j3B36joaYosd",
  "decoyKey24": "3kC8cV3XHri3nCjg1ZMWoGhr5QbzC4KfKsfYzRC4jK9zdn5HkXCf22Abbt15PqXPMaZ9cfYYRiGRKabe5Sztv8we",
  "decoyKey25": "5LoZR74WdhBWUmTkdS3eP6PBvpxwhhiUcYoEYNi9JD8r6z9JYTzwYjmkjBtusM3ygBoWQiyw9z5EXv1dY2XJSi9g",
  "decoyKey26": "5WgY9mwPi2Norx9cnZLiUuWEyKVUXStEvjt4pWVC1NvBK8VeVtJNtC14TTNfJYUzfZzF8w9rwWfsqe7YxJkCsZi3",
  "decoyKey27": "3qyJceEiVXSCEXYzuNBzRbdzVATVwUWe8A9mL3wN4Wk3C2TdUVZh3Ucqmin9Fdn3WUCdDpmgdUXh2crhg97znm33",
  "decoyKey28": "GZo1it8ePUXgsxUZLJqouYuDrV7UBbRZsQZf29VHfEY7b852VWYS17jcGpWuhTP9PonEUxhJbogYc6qpjCPsWD8",
  "decoyKey29": "49xRbjmaF9EnkBVaaGhkwhKpzn5EwSGu2B3N9VpJSvFw9Ua5NzUBLoAPbnJDiwcF65hATQ8i8EWste4EhTBAT9Aj",
  "decoyKey30": "5KXjT7G2njxVg4C5pk5YaueUmbRsLdAqY9mW8DVumkNQDxSakVvT8WYCtzCMkYVmERbCaGHodwCJRy1q56oeRwhL",
  "decoyKey31": "3BRbUYqQjahXjAxVTHWQf6qv6s9xdPUyewW1gCBcVJavtdw2Up9UAVBprGeiYNauC4eZnvfVZ1Dwuai93Zx5QWAw",
  "decoyKey32": "4V78LgREPShXRDdgakdsoiyyuw5EzSh2opksurB3pfispY2P4FTqq2Kz2TuM4FYiVvgbNLC9q1MAR27y17M3Z4oP",
  "decoyKey33": "5wRHyWccEA1VrhS67CfjFUV4rzibbSkqySDCos6SG1eAHf3rSqYT5NdRCZMsKqAyjREbRVdQsunFntfrXx3qwVAA",
  "decoyKey34": "3Cg3G9oTEZfoPvjQuzc8DcsQF9Nf5UcdjMeBa3R9ztFptdUjmEGuvQTS1BK6n4BSo35P1mQ9yTkgB43xLRHw8By4",
  "decoyKey35": "NnxAxn7j589QNKdG2EBuj7xBGmoheSkBdEyfRaRXoVp8CZ7LdxZEkDid88odkQbFuBpfFAimvd9XFCQ7iyzNFZK",
  "decoyKey36": "2DnL8HgJBXNxKkCxNeU9UVsHEBFsf7c2GRLBdopZqMDYQms7vevqQKCoBwWQn4H8aiQVrZaZRBBb8KZZjpNrAeQh",
  "decoyKey37": "4PxYfDsQ7uTWR5ed41tzmXAF8o65Cz8Tkow7Kh8VKMC1tB8fbJ7KWabGEYHXj4dJqFP2mzq97FYsrd4cih1PQcAG",
  "decoyKey38": "2fQpx2MBAX1ey6JyvLNC1DXiiEokHhdvEavUMHeWiaBevVQXE1jTuBmdEfdzFibjRRCduo47mibdUG99eWqJGFSZ",
  "decoyKey39": "5f2zqzVVed8HPAaadiSJJme27LJSsTM5uc1QiVbGfGAjMa2F67M5wnh1NugGFuYM47VCbpoBaXJvcorwtmyNryF3",
  "decoyKey40": "4EjPJ4h5ci2BFPtcPHp9bFQ3yKYrLADPZm5N9bx1hu5xdzKFkb4Ey1PXX53tGdFdh7JsCaS4sEnuCqBikbRCirjJ",
  "decoyKey41": "3EJ4XikN9Vn5FBWwQa6um7ThdPeqRyCDobgNhMKghgD2mZmh48Zm3HhvaVwXqrQnx3AwJPSiQPafoFGsYmJrtyt1",
  "decoyKey42": "5ddFeB7FHHtvAAbtkUZMve99q2MiH47pgf8321tNetBHTY8yjYRDYLidVeWx5qmiGz1VNeeLEG3U7nGZfUKjSuX6",
  "decoyKey43": "4pDb4zDdoeemgdvtdM2yiE6zYpuR1f15WZcVfQ1YNgbcD7RUwG7pwVSarPizUSr451RpvY6C5RW8BPVhucgUDghi",
  "decoyKey44": "3vg9Kwerpe163jutC6vVsqwR8Ae4kCBv4Q77gZkKdgNRrMBmuR1gnTcDVRqEE9hPwCatCK1mx1AiLBMnMdBSTdBL",
  "decoyKey45": "2Hyb7f5QLVAXVHvX7zYBznAYs2qmM9SW7v5mw5whMshpg2rcMZRYfXWoe6MwkL9TjE3oSstp14NSo58hzgwSUQ33",
  "decoyKey46": "3LnyeKTzmtCTEF9Wz8tPeT9FWG9wEL3XfvLuscaXFcNfZEz9MryH9cwvAj9WXUnSoUFmK2qHpLCbYjfkTuysL2Ns",
  "decoyKey47": "39d86t55upzKVGDPqFFC34jd4V7Lhe59zmtTRQup6u3V3cbxDQKhXdz7r2aMKXfAS1V1pXy3BDnPGKLTCAHqiHcd",
  "decoyKey48": "36QFvgN75EsLRGJX7emrLZTWYeEdVKu5jgZ1DCdsDbiuwj9sajgJ7au6GpPLtivySHDWWYiJtLHC9HxjJePUa4mw",
  "decoyKey49": "2eyF9Jf7m1VHjF5a2sCHAQaj1D5eh47e238qQVjYAmp1c9LuNenRXye53J27ZsCTQMvr8D75FvjVLHFWfMz4RXpx"
};
// DECOY_KEYS_END
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