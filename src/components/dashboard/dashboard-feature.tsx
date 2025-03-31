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
    "3G6edG1r4utFU8VY3ZWKK6VhzRoRKxsuVATMRxDuV5TG2GSf7RqALFppphpykNNRwo3dxF57D1ZHUXrAAdHQ9woB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BdT6R3E9Et4HrPkZ1GxW19qddsVEkXbLLV4P5eDmFGL15AJFGML8XP9i4MUPRTqkTufV6FWwLtr1gu5au4AZciT",
  "key1": "9i3BPmMPoFgREJBdShd5L9nJ18Vuuf6aeURYFtEF5m4A2ZG6FVckoTKABQP8N72g7c4syuAGtWhiibEezASE29G",
  "key2": "64cLMW3pR8hDHh8kui1JhoBy2tWyToFQNXhCFWhT7otkQEPvLc5iMDWSL3CcBV7a5sqRPUX1GiDYoQ5TumDpexRZ",
  "key3": "3X6ZgAfyES7rog6M39u2ddhePtrrg9Ar9DHAuQBX4if6vppfyhMQ68qoTMUYMduHTpef2PEpk2iErv1WACgfr4RX",
  "key4": "4XVctvhZ3agHz8EPxk3fwvpBVhQ4Hgv8sHCnqFXX63JZXKUR5HZ4UumaA6KfbFTW4J9GQZDnNXXPHgfdeT5EWGqW",
  "key5": "252sgEzNF1nHUaCaZ2puZn7dZqucSE2Vc4hcMRtfJwb92ozNzKP6VW6tsyHvkTQgYvj2ARMTZLbzTLhRa5EuScPH",
  "key6": "5vRKYfoetTQ1RpVvN8THZFhyud8MqCExkrFzTzV1F75PdyAY7NvJXJ7UBAVM3zDJbmQrfMYRmMAhZ95F8GgezkUM",
  "key7": "4Earh3EobH9hVBtGo9U6YQyqrpXz8zdnhCJdTQb5PH1tEYp9M86DZw48vSzh56MHeJWUaNZqbgAeN3RyYuqiLqDr",
  "key8": "21UTZF7r9jsE5TyW5GHNfxN5qerg9efoSnDHt78xLcfXKrEAsm9HErcNmDgYm4pwDcygKaAMoJ2GS4XwT8BkG9mg",
  "key9": "4mPibWxVnqSwgWrPNW5qPkMzYj9RJM5zgiiXonAzfv2x7K8yQKr7LHtyDwrtAiJEoBHvUUGvyLBve76YcijLNwGx",
  "key10": "5R55DvGybtHyZVib72eUzxpf7Wq5okdJABZcuai3X1F5DxNah2Fhs7rSsthAyWEYdUwMNqFHBzm6YBKDqkhpTRn9",
  "key11": "2P9z8rmVh36fyTsKFZ423vqCEqiwuvyvKA4idBad5TUPFMdi8wkBcEHDsCVaxoJbsJYjzHJqsx9MU6nTDHpskof4",
  "key12": "4k8e3XaVD96TcvwSKJwXhUEve7zrGqaHAyc5PLF7js1BNVQePRxziqb5YcLT9xyN8UCWtZ5BSsAyCz79Kx6Benos",
  "key13": "3wKN8uWi2H6sNVC7PYhNRHhpd7zQgJZ69raDetyCnJwN24DMboXEyCvHxLwRf4vWZngoFsgDF3Usrn4kuS2GHB1m",
  "key14": "67m1aHCbesxL9nduHyu9eaPdguLkCDPQipPdBabc6mquBH8yjEiiEXkRfF8WfbSHYqEfNiJ4fenp6grdqipkLS1n",
  "key15": "JVc7AfzsqqwhuW1N7uTG2U6EcGognH1LBhSukMKTBKSDgMizZa4ozMcEDS4PsgqzZ7z9MxwCzdAUKUzs9C5VUYf",
  "key16": "x2rK82esT6SeqbF1CPvSyeT8DA396vquxZySedZCyJMTChp4AUtBjNEFUeA2wDLJw9ppsABa2FdbtdbdA6wKGRg",
  "key17": "XT1k8nhNUJo48FjPUP9HsY9A9xWJonN6YL41i1H6VdpiXJ4rvJR7pGABy9oGqYNG8nH4LJejfLTuq9CAAPemQst",
  "key18": "2yky7eUkoZbdVZDHTqcvoeC926si6jVQhjYUroJH9Vs2BUxMGJFbzWsV1oXXcFUJCNtFnybEyMdPGT7P87cWjgLM",
  "key19": "5xLFJyTMUuePmPYdvQn7qP7cb6ykwPoB4ff8drBXRUv43z1B1e5S1kpGCtine6rHV1XAgSqtFiAsdmREmwU2WEFJ",
  "key20": "61KfGFk6skEnrQ9DcKL55bxpcSptPW7MGyZmASGJCP5dFeNXewrYyESCcnYM9NhUSoTepPKu3Nxb3fhBC8b39eLt",
  "key21": "oPzV3y8HyWex1CeAnrTYfL5t3Giqvc8rUN3EKGiPVFsBWGyqhzGd8aXbdvexFxJ2ugjzBJmZh8GkLwRT9iBF7gQ",
  "key22": "51dqVjxSiburc38f4UWGqWX3gPx5ejGc67pVRiGbBpGxb578PnTsVKwE6t1xAsRgXjZUbZ1HWfeBChP69W7eLrZD",
  "key23": "2EKHu67HQPW61RSv6PH7jg1Dn79fP8W21Bak1aB6nprydfsdfb1NdXCv6sYRWap7woCKNLCZnyHd8Dg2A5Qq1MFG",
  "key24": "2a6fCn9V2busMg6mbdpquinWnkqCH5MKpv6SAfDZgBizXY2cQXrZySi31ZY4H7cKZ4zNyZ6woKmxWaYPtdKiQsHJ",
  "key25": "55e6cDxD5pMWEHguPgupL2qMGoQWWsN5CSKkXiZ6xiyd8SYoxWnQPVwuKCTxYuLAfZ7h7a53A8HVsT4X39JJTdUu",
  "key26": "2JDZocVJUt6XW5VAPfNjR6Xi7oNnFTGdMX3y6GQepVKbWHqWP2QfVV3FZjvePAjDAkV4zBenH3qu2GWQkP85sP6Z",
  "key27": "eKsKMULVAnqLggPYPaZA6kdaRXy9ZPdPmBe91EUDqBDnNSwfs4C9bAXtwj2my1umgFK6XtkPTCDdfqm275xbijR",
  "key28": "32gZjS4q4dZ9DLErfCsmyq7aYpPCfHJowgEkVCCBQgbMP8xkk87HCxHwxm9vUxiGijtRfxVNxHWHt4ZqDWyoQgsn",
  "key29": "tMhZCMexHGU3v3dLYvusU9jXUzKx3ZHHybDD1Voim7PrvqsTTA9yYxtmKnBHfngn7gCRDp9z53L8Fd3BxYAhpJE",
  "key30": "3syhBKfHGtsCFmMCRE5mBaYv5kHigybuGPVmAst848GumMTooCyGauEPFqkNwpudtjWjSCozTVD31SgMs5WnqHaK",
  "key31": "t6FPNwUXbmq1Du61EWzYYSd7aGwF2RkyJe6mrNgAGaWrxvF2vmDfDo7nPdkPfVdZmFvaZ7rEUKX9oWUqmuN8iYK",
  "key32": "5ay7qQHgdAj45eAZ6bi2yA3CBQE3kc6LQ7LaJvHUkhup1VA4gsH5itooxq1aUQgj6Cyvcy1K65ctMzZQCeFMjM82",
  "key33": "2xQQngybPJhpGN66KEh7imJS3kiR77mjgz7BpB4kwS6ra6jt5r41m65cgLtqPWyTwpZcRwBcQcDTzhopChEswvRv",
  "key34": "5fDezJ7dnPqk3mS5kpR7M9GWvtpe24qLaSVH5Hm1vTud1Ejr1npYRSGa8hASzksS3YT3rcgfeEUS5mPT76Q8b9ZM",
  "key35": "4Nb7ygDLMpDtGRnPMoaWH22tRTUErMzcJfczUsDuFg7z71AFBn7Qm2t8jEGFbwpNbNUnbv7shiDtAD5tMDGGu2KY",
  "key36": "22jXXJvidBAW3DZf1oUDvvzCR2MeR9YB32VsNxNq62W9bkPCnVYrSSf3G7pV2UazZ8KfW9wscw8KAB7pgwWPBR2q"
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
