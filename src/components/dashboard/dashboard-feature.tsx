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
    "4dx52hACn9yS6zxD8gfM5nnoLF3xPyLdr2tvadRS2uRvaWXCeDbcPXfZSYRFirquSXQutb8sNCQFA862Hsa3bQUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvQDcssyqTeqAotSXA6WDLfbEiQhKXXkcVgexwUvbiJ84Fm5Ce8pfVpoAvxCdsAQykMpWsk8Po8cpJqj16EGkP7",
  "key1": "oJwk17eKzoXzSkTMLygtZB8E22ZG5f3w8n995Aci65gCQuiMnA7bm34FSi2UT4TzAjUoxh2A5gotoWnHqSkyCt9",
  "key2": "3hMB2EcdwD56iA6mAQzgdQnHS8oiaSEaewsEdWwSzfPnxyeSEFsq1pkt79GVxSms9GZjQrjjw3WVTwAAupdSNpoe",
  "key3": "JpbSvAGaVkEEvG75vbcMjgKxcRz6se1uxYDSDXE3DxgbkK3Mr9i7XqmrqGwA2xQ3AzzqmWWCFW6Ba9Vb8DBfxXo",
  "key4": "5kpJ7An8QssEDBX6F2MEsWJCMg1Ar5BL9S6UGAbfbtSoEfR3LDE6FRAzVWjvZSL4wa7hQHMXbWp5ZSLwycdCQYtF",
  "key5": "5ukwxdDS8xQMpLbQ3NgFHBwcgmVBnxbNvbMhRqyCTJc7Lwfptp98exxvrKDTr1RSupjA736Wzmdf1CUHXNV7fzTL",
  "key6": "5PrZUNKtxCyNb7w4DbUova6PnKavdrk4pLekHswfcQ84HC593ETneD8zUFFcuZpm8E8Gz9qVPDHBWyzS6Hmptx49",
  "key7": "2UqkFd1U2zgmmnqiHvJSmwP9fBaDG5a6Xr17hj5xByWdzHiVKtxA8D1HXt8SBfvr21MkggCEFTMcx7N8i4gtnpj7",
  "key8": "57rkTuxveWPJyokwb8q96NLciEZzKMXR3vEB2CrvkCC3JadFvEGAWDhRFAwuszYMCyfq8kH7RMjSk9ejTwyYV3ME",
  "key9": "2DxwFykVzwkRdUKnwYCRpk7gsRzyN2oegJwR55mYWskPyGXTz3fYgqhFz6ZEg6hcTojAsRWEEjexz67kz1tZBaNx",
  "key10": "4qWtTK2LNJb6CmscWjC3RLKPaQc3aaD3YhK6hX6GrFiEAiWrNSmM5eGMjqqXbDYozvinpd67KANzThcb6AYnpxG",
  "key11": "32deDsdAaC75EXGjhkKsxsSKqC8XCyhXZWEiFsJburnffHf4BTwGcLeecPU4JxJ19CgbEoYanADewo8zNfa1xwG1",
  "key12": "4RmDnBAPEVfD2tULqgPMgjhcLfA85NsxLqRWg1jyAwiESwDqTVbRZYfEenNkZGWKuQjcVpk8cmuLZafq3R2khgN",
  "key13": "5pTqw2eUD8uJPkFPTDjdWbnXwLuzdwD58fEByTt54W4pBdj7KBMnfU31qrzKVmGeF5J9pCHSg3t2M6S5HUVbArMm",
  "key14": "xf5sKaGYxX3kR91jSpZGcPf2t4njXHscTuMm5uM7AGobUsYeDf7poCBwesrciU4wqGyG2mW2iZ78XHMko4Pr7cs",
  "key15": "3RBuf5aHcco3dtwg44n72Lzes8SkfT5QpPuC2gS4V7MWKJPqoZofNkqL5A19dcHGWQbDGa3eqiy2oNr8XCEhUTKd",
  "key16": "23wjMh5n1uZFD9uhCTock3A8Je9FqvdEkTs3Qs8WDrJmjzaj59pzf6brJ8Lp52D8dJAzzp4rdpLh7GLknGg8TGQF",
  "key17": "364iXEGmds3HcpNSXWfvDGgcqrdQdWjVPCxcRr4WsFE2XMbHPoyXvfgyGQDHqr7yrzUJvHDoMTuLUy7zWTSkA3cC",
  "key18": "3Bop9aThdpYWLMmqHd1Ey3pGx1rNFdWJSw8SLAHDcVfSS6JHTysR1xvYZ6H1MpD4EysZ8SduUzZBidpSXuszUoxy",
  "key19": "3d5DWNNTM5hxL8uAiGFU4Drn7PyjCB2FuohKdbBHcGVW9HqJfEtaSj73tVamGbT48WArqijn3PN31BRyx6nthXZe",
  "key20": "5twfsgSuULfrgDqqQ5jAPy91Dr2khazKdjPZ5i5UzXzJamBTv3eLmE23rspmHumAcExAZXbW6CX9asD2TUj2CWBp",
  "key21": "5PAtvTsbP7sPo2CxNtd7XAYCuYobHrnH3vz6TLLL2F8cqG1FQ6N5qGD53Y5RHN3cfDfKkKXGM7dgFpNpEP2vvCwN",
  "key22": "4m1uQYHhV68gzfQdsRzAH8k6SJBTausjhJq7zPBpxUBMkwMWpwRhWu8DHuKXJGXgmDGN43xGsZrZvTsR8UeTibFd",
  "key23": "57b3BbQbGqi1MkAGvZVieppDgfV9FrsWTyMdJ4Kuc33LGN38y1KYQhnD9xPuMvtKeVfewAdDAAxmq6okcVVoQSyd",
  "key24": "4DYyZPf39tf6g6b4iiiRTdp15WYfYfZNU2kMvbR5bRmGNVFmJ2m9Zp4vXapXESPB5jYa89L8MVPBb728WUP4XPw1",
  "key25": "2N6rt4DWih49F9edRtfP3PRTKkc8TY11wBR1gExteNnLmUQhH4WQfQiQXnZxUDsGwti8rMtuSY4VYhT25WFfCfGg",
  "key26": "2jnChHzCH7agBae4frnAwXVq5nkGmtnLGQeCYrBCqHjM3bMm3e8p1onqpH7jKmxVGDPiqY9dhMQN5FdWauF8cAGT",
  "key27": "57sGCp8FuKhjTiA3Styp3iBmGjj14n3DdRg2YdGixsMkL5W1oKvwS4QWFWq2yqmoNNoVCqTEYtPHnnRdN9LAyH9s",
  "key28": "4Kyb952F25AhBnMM69qQ3ezKKjoiA3c63gsnhotPEcg3Ak22aqVagdvVEjctgDHxc6vmCCndaeSzPCx2HGFJ5gRd",
  "key29": "3CmdToSXZWBHGN6Dn7PddG467WcZNF5seJvb1qZzFBr8ncDR9UobmoMuPA6ajt2Fvxsw6fTrEkHM6wH3rAvf7deL",
  "key30": "4hKWDdBrLptzg6Et18bZjeVGmfM68Wi7hbCoDXDCELMZNstg5TaRb1GcwB4dNeJDAts5uJ2HBGjQVPNVm1LMV8C6",
  "key31": "aHj1mqx1wLBnznSD3oyJT3X15t68Swb494BEM7hCMGhL76Yv8Bp3EtHpvMdeMxVv6m55Hku4dSPiqDrbehNFxwH"
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
