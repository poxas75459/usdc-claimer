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
    "3eKUhmPfRr4NJeoENfJE5AQFjm7nTLQchPwc1HPXaNB84G3Eo8NdbFDipqNJ1JsRVquA9zMZxrYn9ha6Ye44N1Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C8iweCEHwUSpfAXMZ37dCfT1BgtYFC1f8YK9JATSYLkhHj9BdwrFqViUn51piXd7xWTCnSku1PXZxE32zFosQQb",
  "key1": "33uB42FxDePYxeimxZkbVehNMMtooENsQunVyAK5rw9eBCbu44Lx6f8PCCJc4gy9QqG8rjLZjmMgB7mc1n89fVu8",
  "key2": "zz55nEGscJPehiLG1VHKj9YsbiixaS32Drt9eVJGi8D38UHGzBVjPXHxJVD6ugeAbrLEusLrxh4nCmfN94RoPxt",
  "key3": "W56cyQE7Zpv2Z9yy8dCw9UbmZPsTqVxEbYaRn2AcKLuDeiyX4RhzyQe2NqeKTYEqNMXta7vceNziCxKsPcf9cp9",
  "key4": "4UnwBZrjrfT7123RnmDDUnrpjfFcPdkKrHLHWDAaDx3ULMjNM7cr763hAHRR8MQ48tVLAyBmiy1yohRp8yezeTBS",
  "key5": "XAvMcWA1P8Juq4DfVbTyMHyTRcszpftxitdiPa59nY3sMoyasT9rhC2E4Xk72gErGhixJQms1kFWh3YRNXejg6A",
  "key6": "2SXTSn5iFsiD3H6p3bSAdnvpwk1dFJbHgS1L2W39shfZYBcDXqAsBybpQ1xG8gNVQFYURPaerxGvDyrgNCQRzppe",
  "key7": "3jFoiTzkgTvbyoYyhNGfTa8EUoVSMy36veLPkQY6wcMNFYUqxUzEZpJ3NJqU4oQRS8wEfomb651BWayRqhad7Jg7",
  "key8": "62g6NCAbuCkLsKu8tjGi9AZ8pHLK3LLo9Xj5QDv8VWsAHyUXVG8BeYuG33p4mJJ9bNoDrtEqsJhNxGDUVMkJ68oQ",
  "key9": "34LMS4FbEgHCo9jFi7woEdSoSQxo777ou1ZhcgJ83ehYmSX2HWqUuVYLUS2eo8iyAzcnZzM7aSAXo7ZoPLpxRKJa",
  "key10": "4Po9ZCkaUyVTJzpkiw3JB9xp8cNFQuUc1wXkjuzniRpL4eUMhWs94qEdV8xicbPbiXbvMjF4rTDJNkp3EcdMXFsn",
  "key11": "5wGWHZkdMjVVoHZvhBEFi2XedEAjU1dYqWEi3qQCCWtVLvSAaPq7zL9XLBpoMTAydQpXxtZ4yCSrRRHUhUWvvmLH",
  "key12": "5JCCeB5fxuCSBN8f3xxveSfzjr5pi138qFqifiHMqdRK5jEmm9XeLkuuyL2jPwoT2GsXteQDEJ9RcQBbnBNseig",
  "key13": "coxhLZe1Nt4A6jqAKppRYB2DHq7WJLPLjBrnBdRDSuNqP3QkA1wJWc8UECPX4TfiSj8NyUvm1PVvPaGxKbfY7g7",
  "key14": "4tohWNTJZfM2kNwRiZqkkM1Zxza9ECcvd62trGwdDuJgNaEpy6jzs3p1yDc4MJD9xPEtT1fFcfFoiaThvvEjboim",
  "key15": "5ALWdsyFMHX156nj9MSdMaDZJXwZmoYF157wmvaNpGHkAfRStmhesQ3K7ZTdcFmq1qMsMWfkrmB9tZPSqprcVEF9",
  "key16": "5MsrGLbP4mGEcFoF3maYk3a9i4uR6kuBbbx2bKaPrV2SUd7dH5iHdWFHDUrJvaSCANuiavdGra9z95349ewVUNSK",
  "key17": "2sgVDxUWMLhfu2qgVfvJNSoXbTUBp368EWy6ACTYB3DzUPoquwPrYLcq5t17hqCUX8fMHZMH6vzdRykZKZMSNsNd",
  "key18": "39NV5o9t9AhPXMF6KRjB3jXUa2ExPc95H9nMD46oGtUPEwP56YzKtZS6Af4R4TsrNZzk9wqSobG3ypwrWyGjWY7e",
  "key19": "TWemXdLnwv8QmvEFibNq1emuCMGtvA2BJXxrSgcXYa3N7YWAAMqeG6sgV7q4VRjT8XgYMgwthyR4Kx5sofAtYbd",
  "key20": "2v7sA3cmsqgwf1HLkKjHQfbCYAWzPMjDq5tGDFVDBUBJznAd6RFiY81YpACW6xGEZDxXpk5BFfpvogvgg3c6jmFY",
  "key21": "432GQbyFgRHnDsnZP9fG2nZXuxxs1DeB6LnWVQnQQaPAGh1uKjno5AZbNs2C9vNDwUuK1bTr7jsfU2nDKnoBocEc",
  "key22": "2g9m15KVtxrqbYJEtPTtv9R7uoA7BgcdQTK69eMrHXY5RTrBzmXPo9GS7GfqBxJQNgEtb5R52rAj5kJo9dqfiazz",
  "key23": "3Ym5f27jN47Ec2i2L9xdkVMrMyDGfLStQP4bvivmSqBnc18LWxdE6y4anQkQm8iYVH8waS9AmvoaVrA9pBkx3z6K",
  "key24": "5aCPxZwBjcweZ6pHppb1igAPDUKaoJ8AAV5ztuXSdmL9iZWcCM8afBxiifuCvC92ufcu6QGNjSNkuJRVVn2SQ7iW",
  "key25": "4mZXJjyA62LcUFjqN5wVe47Gz2hFeTZrShYCCX3TVazfMMy6VkqfHGfFWeoRB8ZHCiL9KYoAVrCqiCsxt3kNcSDo",
  "key26": "4h5g1ysXpQQVr4TgmnaSLAdt8LRSAkSwdJ5Pim5m1aE64k4VUnGJT7EaYmZcFCuw8ShPFuVRdvniXhajuGqrD5e3",
  "key27": "5AdrftJbh54Q5DgRAksV1uS9JeJEjs9W6cMe5msKJzHHNHEkfiTMj5eQDqrDiLFmmpu1cD4Whnk3ZgFbK1ayAmcX",
  "key28": "jcgas66U2iUeJBMhSJsvWfPSM4DAT86WgNfkuifthycPG5QRMsp5RjsH1hrQ8MfCqMt9JVdXWDL1Jj2tpywx2eZ",
  "key29": "53Nb6Yn2H4S6JZvW2K2hQ6DDMoC6sTnitWF1GYVq9cgud51UUpjkRxwNVXPbBytzefR4U6teQSrVXCz5mRfL3noz",
  "key30": "GTKjdCEL77zg5wPNwgAJZTyRAs4WUkdgE5qUApGqDDNDv47Th8Me918wbRUhxMFQbVctWkGcaS8cuJ548huDaB3",
  "key31": "4KubANRne2pq3S7dPMGHJoynnY8fqKB3d5AKjNNDzJG8LgGNRzWj4sjHazM1qJofwvRB3e6p36aGsT3TaHpWJ5Bz",
  "key32": "4y6YHcUnyKEhgPsGD96v2aeqm82AeZKbSica4PovuDu5arRAabVJR5F8DyzktZM4vxhZ8QXwUTGiqVGEtEmPnq4k",
  "key33": "5SxKLbDVHs9uNmrnhQSUUXxjJZTetrKxBHJJ12WMsqDbFepg6o6gfaMxRVJSzvXmWPCzP1ohJYzQ2ftfoWNBcnHo",
  "key34": "5ijf6FzCd4Fh66WLEA428trADL1EuPCBazpiNcWdkU3cJ3H7wZqjLisXmWtLo2btJJohyyVgVfKr9YCyBtHSejjq",
  "key35": "3VtfUQqWxXk5275SdXfvDdfRdENV1RCMNTwiK79fkAVs1cFB2yZcSoaYK15w1uiDEFpgcsTo9bx3yucLG8oDasEX",
  "key36": "3SqJTEGN21sAguibQmayvLWdXZ5spmBiuefth4XeaYrk9BXKXaWVpoUpJ965uemPCy41zGFqerotpasGcUsVqUe3",
  "key37": "4LbXiCQvUuJkh46M4m7BMQG7wWrYKhxrB79yseMFvVbbdg6HZ4cTTYuS19SxdQXBrWBpsmcnq4VZ62gzoZPfeeub",
  "key38": "5XcVYQ3vbQEw4qqoUn2GPGPpMMs2DFjhaR2spSosHU5RB1ohhCzjnwcgq2vW7Aom5BaisQvaBFabqf3JZsbH7VeV",
  "key39": "3d7oFGGyULhxtkf2UNrGkfwwMZKC8qBPCWh7egTWuM82ZHCaoA4cp93RcuKtCcfzdKFPFEuH6Pbx1DV3mpSuUfa2",
  "key40": "2TAsEkTpw58d9ziRW6Ww5QYyd9n9Xdwn2R6Nht7vmF5dfoVjEAMzSGN8xnioMA4jT82LimyNbrD6uEXKGxuNwfHF",
  "key41": "3s3bxCc36jWZC5sBJ4GzxDLxiZ6bkhZQwGmjT4oVDhLRzUwTceoUwb9XYqqnVq9mC67pDCFpBHs7BAKZJKAsULsx",
  "key42": "53p3mxRkrrAikSZf7Atc4TzMdCTAk2bcZVPRj6i1hnYzq83BbcEwCrkBxojGkaq86GHiH6B8oy1ctLsAQ47ru3hS",
  "key43": "4RvxEqV8WT6NKYRNHPmexnmZAn5Q9LZpFsULS2g3USQsJHReevU1rHENjEyWWqXZLUKYY5JPdYdgsiEHW2DaYwnU",
  "key44": "5xmgZAT6hQ8cvM6dJEcKQVAZgbnNg6htLYnjc5uH52xJivvBm7yNseKcymFnEMZAR2awP8jmaX11rboMPm8hsgVN",
  "key45": "4FiJQr3HmGPRJFaREtK23voZJRxFWFYVrxD9c8Ahs5oAhkfAAUvadgBb4Q7XGiFVsqq6GAiMgHVz7eBdyPcwc9E",
  "key46": "3qgfry4WbNz97ZFLcx82nnAs1SD1XJgKKCjhVdgFNv3H6ZzVxaexUiC7FZp4J3JeMzDFPj4ANngdQYa1Sk5dQQT9",
  "key47": "5TzfYUxu5goNZYBy8hPqCXSP2dPKv1xwzttmRj45t8WuCiWLTFMdE2pTnDtVHM9AayRVy88vXaVs6xHGkwGuYPYk",
  "key48": "2rPMHhomBNPpnH115BCTopTyPSDjLhcQont6FHnkiC8KVu8fgEKShWuHVtua3tqZawRkkowvwQ8L2nXyCHgJAQ8A"
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
