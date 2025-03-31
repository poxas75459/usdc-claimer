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
    "4n3af6yQfaMqXvTtLS4BMvs5thAVoD1sWDWaZ6t15NW9VQeet1c36g1zq3JHxG15sBJ9tFXdzvr2bB5kKgBsqwbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mC9uNhwedtBGfitufexnCYcbDCKtSZ8YxPixTLWMyUy9zSGW8XWDW3rRdmKE7emMXGRbFQLWpZqe58jsiBRNVxf",
  "key1": "X4sfxGzDFyVxZX7L2YBtSxTXsk1xofbXq2EQjvR54fVSpiDV22reM8jFMd3BT6uEwNTBz5zMs2iyfdGzfDReDUR",
  "key2": "5KfEpHdsTZUAdQamo1bZYNs1XBWM1f4zWHyPLATMBCntf72diDkREejKRb1vNM88Dc7GJ2AjPjyNeie4QKDbbyBQ",
  "key3": "oZ4WP7RodLGy3gHoVJUVoDFhyaJw1sEh5hpxvpnDhHR5rxJYnizybj5Cn4vg2NYN3HdzJYqbeLrcns4UBP5YjHo",
  "key4": "67ALQdLNT2eMMZHuFvE3SXMRGLWAMD3qRAjdQHabFcTMLpCwCWt1pEJAYzxAUrp9WFEvrB9TgnoQLQ6PbiZAiq3T",
  "key5": "3a4QdCuXdhTSP2ML3Dt9nZfa2ro2kQL3FauuBQFQYjBdbMJTewwgYGsoohoHZb9ZkDqHJFmaQajU53ySPGWKyYtY",
  "key6": "5t3BfwHwXTyN64K52fZu14AFYZpyPVegxDuGSo34Te6YJBF6kSPs4CEYg9SPfrFGxdjzNH9wf4Jj5K363cJ8KKve",
  "key7": "3wz3ZRGRt3s6KXLDXRHqRxXiwu9E2Cv7uHDY63YzcpXPCj7jv3rUn4HfbhUm2nh6NtiPqpeV45VCM9Kcfa1o9eWj",
  "key8": "Ag4as4f1J3CeL9ALQySU96NfQ55HxJoUUeqmB1KxzBRkr6LJK5pLoqgSVxcJn7Y7oJNFz451f5NEfmLkkMMBiSY",
  "key9": "2BJSX5oRAjebCPJBtEAg8Wqvn4eZEs5RaKuzUZiZe8SSvft6NLjZGTBFvt1zG7rJSRFi7HD5Zvi4G9bSSWvhVsNP",
  "key10": "Dc6X63HE3ipkAr3x9H7BvpKzcwLPNAezPW2sMfVKmDu3o3MkygR6eB6H2LPuToVBoLxiJHkwQ784jvf9kxyvG83",
  "key11": "3fSvUahsKETJY6mkFSiMncWCxfg1oGATRpNTAmuSMgYBd6C75xCbyySV3jZH44m3prQYf83L9tCLksqoGqUdVvFs",
  "key12": "2HzU6cr5kizb9uViqNrJJWvaoncdAdvXtjZBazQMGQAfsM2atRc9i5hXmfWvebearyTvrjZJ6677C3yHa2HwgNJD",
  "key13": "YgPwL4e76ADEYd32EAaKpHj4HLvJTJmVGDL2v2aqnXiyJnZyKG1x4JjNEa6BxY2umqRkkS1G3PbzwCskrcv7Ubz",
  "key14": "5bWv477BcUzBxu4e1SgU8Qno6cPGCnTgZoto6njAnZErEZgAvyLWxDTQSLUs21G4pj1Dhe6wqovkBuYh6NMkHdBL",
  "key15": "5bgPJKGNjASWoYj41XAFJxoFSQwR3s4FAAe4tgjUa4NPoiwG9fkgKqzuxsCFx8GgXyoYRPMie7KJPCEqqUeSvBfm",
  "key16": "5oCNG7APMaKcntwWuUxG4i5zJkGekbPvQrpzTop9Gf4foKqYuzcugHbsGknngWtnAjzcKaQNeQoELUPerbS9FBVb",
  "key17": "4XhD5CSB1iWr7XYwXnjGWp6urRHtv6xowRWXKhA2FKx6QCrN17jvAjm4TSXF9j5tfQ5iUXGW1wXBzzCmMWU6ittA",
  "key18": "5NYgWwW8VSD2NVaASkTKYPhRGhcxChQLyGQkoX38CCZzR1CEQekHLTnAG2MWmqZcccZn27eu1GiV46EpuUs8pjCt",
  "key19": "24GLLm88ff9Sh4b75BB94B4Rnygk6NzdpvrJn3Men4dZW8Zhp3xxyhJ8cvMC3BzU7A5kuXUpH3VVC1p62K4Kd93t",
  "key20": "2gf5yZCWwJgpLEFbmSWHeJcWwxazg3pu3b1W9VYHcvFsg7x9PziEhbLuhtFFQGyT9cGZEdhykLoKU6QjxZEt5B4G",
  "key21": "4LEiq25uGbwateLE2tZ9ynnmerZvdsbvuUXsApjw2cGNPwYDX5ZRGcoEtNNCUEhDCsKhnE4t5XiMXWMXwispuZCX",
  "key22": "2rRsifi5q9Eid9Bme9UGesJBfg5ZrGFQag5b2FhVHFpBt1QnW8DaGLG8rc1QUEtWngHvZ8DEdTvKEVGJrHTyDaXs",
  "key23": "aN2CaAoA9RG1WSdDtWieeAsXPeoA8yiunP4Ygy4tLsm2x5vjjU9YzvDMJNwjHyxi7Sg58rf23kTEkPnhBTujJn6",
  "key24": "5U2r4XYewZ52g71wUpPsqeKn1WrdwBU9igYR5mZ9rgDnGJmkhrGGxUsyJakNs7AWK9jkhq8y5tBGLjgjgTXmiki",
  "key25": "2Gog9P1YGrbiUkx4RruqqNYXRj77aXvTaKBrY3DoXQeF1LywjoMUm3ab7v3j1G1SGqsJdumprTtQiLwRqbZmvzLE",
  "key26": "62ebNMw9GNzQypLms3pfsK2A8X3WFur7hqp8zQ6wUhnLXg57UtYtUY6bs3o3f5LMSpCQ88m4iod8NCEMVavJtfnc",
  "key27": "4Ce2vw3AqJr9kMphR7phyPVqcXWmE3MtASbLbMZ4GC9zvZsdXpBG7GtsC58nNgRFpeQHtmNs3fTSAsryWPAx2BAY",
  "key28": "Qm6eNGyVfjV7CoKs2fq6DuKKivZDgHEqCt436wykKu73fNQX2TULnwpCiorL9Q7t35esCQnMwHD2aeKQfmHhZnU",
  "key29": "235Baiv1b2FDpu9cDeqZrT62eYiRvG9tZiAo2p8JjatxLPmQtzz6DL9VbLjdp1agipNW9ZJSNMwNc2iKtpTZCTbg"
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
