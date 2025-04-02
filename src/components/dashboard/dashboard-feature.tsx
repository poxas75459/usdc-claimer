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
    "7LpdJwWDfCnvocgTfqSomzJD1oQob1m7LhWrgwHXDSMfsXmTDYMVTLQ5tXPLr9wa2R8KPGzmcHoYkgNLFxwCe48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QBAY9o4saGmAunbYw8dbBKVhb7kNx3wHQMU475wM4gePomKkpaFWGqJSeuTbau8STcgMorwWGvFx4gWhtcckm4q",
  "key1": "27vaVY4sovFTZmzjmQzexsRHYwatz9RSuboepDh41GKdYNV7xFUzobXFFH3CXrnn9nuSpz8tBNM4bMVZ8mpu3Fek",
  "key2": "3cUNJs8gB7XCezuWe3CaRaW6uUMa6D7oo2o3EqAVDTPtMUXR8iPZaFeUdeVxUZsjZXLeF63P3tzgLq4Pb7vRFML9",
  "key3": "5npJPj4p7MHGP5sX52qijAPNHeGLcULQTMdM8QqPfjkC4bhwzzSBjsxqkarpnU1e7taq2kuNW1e5TpM8bUEiGZ4d",
  "key4": "2zZ3oh6YYpN3GkTDGGfBgCjSrJuSbw1UEMRb4b4RRC2BvBqDq7NcftxVmWAmWQdZefkGKVKDnJNW27dscgtpifKZ",
  "key5": "5rP3LD8YQstoqmcVABJJfKWQbNzbUT6RPEC5iBE85uQEHaf9wYciGAfKKZbHYsuXXypHNhKV6opsKYP2LJ9HkfJx",
  "key6": "38n9Y4X373d9bjLniUM5eHqcRnzhNDsjUyRPZEVqr9CiBq91vnLgzFss5o6bHFUiQobHhQyf3pBDXADcKKZx7R3R",
  "key7": "59ZCTS1yarKLzws2xnkmTUzvpkTq3yhRmbMQyNcRQNvw2mTSEbaNdJyw4SvvozZySTx1whWbw5LjW3U9nwzYHTu4",
  "key8": "3xywFfa2gguRQxSVYTjdr9CWcGHXzz6Fg827JMRCKaNgJvKofLxNcjTq2tyoRypHgjDiKqQm3bRFxcEB3mGhGqXj",
  "key9": "arfZ2K3yFNr2pFCMxQMAj7fKkv38zKgNrZN58Xz92mqgESHRcet3HqVwPqHfS53cZQgGCwLCiZgxpXfmT2EcCxK",
  "key10": "H5yV2x3UpNutr6zmeGuUACAwtNcLXXXHUPVFPAamBMLuAcY3PG4dakoCntEYrwyFpF8Ph8PRGZvpmTp5Gws2DYM",
  "key11": "3qFape3T6hu1ui3tWpXi1T6dGCzvSrRR7nediBeRwJ9SHxRGaNJpCX7QM56wYHZDeEUqGgYpzqU4s52tSHY9QJsr",
  "key12": "48V8ZwPNh8GjoN8Q9F9KAPsati9seEeiGJyjjuKuTbN5iDppoukzo8dS1Knyxs4PKQiZx54VVVxR6dtJxPXDeCw3",
  "key13": "5YLXcgVyhub2Nn8LB61R8Z1YcZk4wGoKt4UtwEU8ntBR46MXrDDSpughqJ2RCCAfJfq9xvuMZQf61gJS3xiyk5XP",
  "key14": "3xcjQAd8YQhfBArRxiLxWZbU3q7zccF5ZQ5GSNbjd1m1c7B2edZiN4uNzTcJHiC2y5bAg2JLmdknE2KWvNe92fhY",
  "key15": "5CuYgPLEZqotyXTkNAURVo8FAWSFeLzLNEiUE9bpzVvf2FdhvadNmNwTvDQZYA8zcxkt7MPyQkPXYcpZhfh4jcCQ",
  "key16": "5TJyZKiji2usVVsw1SD1qfGebLthwHfeeT7LFinrxWre2bbMQ5WzL7KqZ2akNVF2xnkW7hP7tB8XQtge53Qrg4gn",
  "key17": "5GrNs2H1Ydn8ZkXriA9WTKgoocKMJzJyFBhLGsT5ZPALvLcomBVvefAQ3puxQyHgBTEiq5nen36MBx6oTNzBAyKW",
  "key18": "2Kapjr5roJuRFbq6uE9BBDtASKJx5Xsuz8AaAfRrMxZqMRcsXYs8t1Qyj6JvdPpsi9hMTJd7vV1y2F9PgCfbAvMG",
  "key19": "3jVpGYAUd1VejSMWsYHkBRv4mL6DKjyeavM9Z4eRG81DekoHqRubP1TDa8PVCfDVbvXdvhuW5yG7uvVpfbpopMJu",
  "key20": "3efbzE2H1eMWP3sHTWEyYkYhobm8E7kKNgB5MkxzKEUzfmi6JRLSTaqpNfQk86je66rk2zuqPSMKy4QVqnA7aByq",
  "key21": "5TCC6ZzwCniRFKSs6EhTU5rUXmXtjfZQ6KYaMggpv8iNRqLei416GBgSysfgNWTKwapjd2Q64HMA3trKdDibpC3b",
  "key22": "2JtQjJfrRuSSB52tVT6LWNcXhxmsNemT2E5mn5SUoYaz6FY8k3LTG9sHCYcHGYvhpRJDLuCAxRAEL4wmEN8JPPSZ",
  "key23": "3XkeBzLyu2T9nsiRffbTGYV3DLnvr16M6S4bGZVzR7HLc867DocrQ9TLUgea6kdQF3iZ6QRnoAUHy2sMbK2ZtqMd",
  "key24": "3EudUHyN5D7sxvptx9hgw7jKWsH1xj7iRQagWurtvFLueexjtKAd7TPas9cLyzJVvc8xhajGyknyrKoCrCFq8KmQ",
  "key25": "3E7scKm22ZhD4uLxaxuX4JkWf9SwbUEeA9EhaRZoiK5ZsbArDYpPsnLXobLanDuwmgx4EFQxMJHEkcqskrDVhuhf",
  "key26": "4SFSZRBHwMy4uouqDARwkD3HECGxrq6csxJs7TBbxEQ9X2GvtBAPnysqb1Wrt36WCekw5b47asqucRgewngmRBL9",
  "key27": "E3Ao3AraAkxBw1rohzYNN4uvNDviMxM7Z4FSWmS1oK7DaeucP6PgvVPxA93n8G42r9UN3TZHty1bjUFD98BBEGH",
  "key28": "4age1XGrFWQButmXXFWZaZNGe4RPRTofMj5G2Cd7s958uxcukCVBWrfhQzesPLi3z4rjrdZBZkZ3JxpPBi5CR3hP",
  "key29": "zQ2HQU2YpaWq1CAMQwDAjUWGUXCgiyBQqYdVYa1ySpW3EpAqDdeQW3SLyDKkAF2H4wjQqssobfEAhNZUKVnLkPW",
  "key30": "2ctyFLHvrgfjm2e6bGkoxgFc6Vxy7AcLayUXwxzmJcfaKSQqujhcF2WqQy53C6HLQ2kesJzdfrz33z6ucFfP9sg3",
  "key31": "2sZCoU86Bvg1p7xakmSxarxpXPCgzEqp9T36QiWf3L8QkU6Nmo2Zeug4sB6QHiXHSDw9N3A9SGCX5g17e1smPR7G",
  "key32": "3rfzndxG6Sk37AsHDQ59cmqUsnjwuNb1m2pcFCmVnkP6GvuUioNF2Dt67szfCRYyFKRSrfpTrcVWtyiruQ4PFNVU",
  "key33": "61WHQbLPc6aaKXSXwcfVAQUeSw9BWoaTwAjfgHu1VQtCThng5vCE5FXz1bWgARCJCtPy3KU3NoxBC7LeaPQuGWhK",
  "key34": "4zMaLzxnr9Qa9g3BaqwyaZdB77tM9bYCupwafqCUj1ZH2u7RbHqRuzgDrZsjkLsnnB6siVXZWFksc5mPFW9q7z6R",
  "key35": "3hyPVPd5tMCgBcXLYSvpH9qk9DNHM4RMhPzVy6gbpsVKKUYW2Z8f4Xu89WMtXKfttsjZ7KVL6aDzEAd4DXJYbz6r",
  "key36": "chtQnWvtM6Yqf5vYx7oPzrshbjhVwex481h9zaD1NNPBdoNZ1LYrykszvVMyqe8kHftLebuixNT7HvRtengaymX",
  "key37": "3nHJdaMymMz3eX3CEruLw79CL5Wi23DytyGMtFJ8fBcgNLbyhRSoxeWRueXbh1SWAgbndR4rc7UhkjTRJzS6jADj",
  "key38": "38q7ojf4FLQdVh37qtS3T3amc8KxDtA3erhSwZjoi5muw8VRcpXgaL2NMUQpV5pxCHohcDgZMgjTA5WryzjKEXkH",
  "key39": "4y3kvLH8zL5t7mkJ8R2ER7ShjHZYLsu1JEACUEDDKJiAnM8wpSivC7uWdKhaRuPbABfVXgjn3KFX9Uvwbegs4gns"
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
