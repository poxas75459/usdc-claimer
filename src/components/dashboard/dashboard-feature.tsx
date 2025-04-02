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
    "34a2MfzgSBXqsciRCC4BFAFvVT8ozx6uohQ9MR3BAbWmgSbAFTivR2Hu8LAo68Bi3yoHtcwqzaeyt3LfxggJgvtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MYRiNrwCREmCZS2MWH98QkJ2zfCGCAUeJrie4mSTUCFeP5kMyoBsmUq39hjobJBUPYDhE3Cc2Qc5Nr9ACh73K9P",
  "key1": "hZuirvtBXeCi3ApKDPXa2hP6wugpXs4nfxRSDzVnaXeFnnLuBukaS6SoADGzixZCo1Cfn8Lu9KmMQn78FTRyy1Y",
  "key2": "jcK3B55a2gFfimV5ELKYHL1NVNsWThZySRpipp3P81P3iWTXPUsg25redy8rxor4MPW9CZqF2yLMZnPmAvkiBxb",
  "key3": "2GyCn4EntMfFHc2Qfdr9kyr8x9n8sdgyeCZkuAQdpFTbQCh3HqjKm2UStFRxEeCMLQQAD29KkAQTGcMrKKrNNimR",
  "key4": "521sxUhfM1ER9WEFXzHia9HXMN7ihLpZyMTi2Ph6gn41632EsmqinamqJ8Tj4d21xuaXdwY36TsAQeuWxNkvYdb2",
  "key5": "5dqBpxBGQQjwsrLTzG3QxqMFm6PJKFL9yrVMRvd116WZDyu4ragHpe1zMiCeHZ1zYBK6y4E4N3HxUPsKprYSWy6f",
  "key6": "9N1bsijEaViQrae94KdUAHgXvgkt2FUGL7WRqeob2r3o76fCLBJuyLEKxMUQQZevrCMJZxgTmvSPkwpKGaaBFih",
  "key7": "3rvRTfFVGDaoVwBPGqLPuddafeZ2HMhpLmRLcM4CAAmPubWdoWAEAKg1tfJekD5Aq3ekZ7gdK3dhyP9ckNGaVJzJ",
  "key8": "56HnDyvjZKro7adVFg1tWLKXzMRYhi8AtkiasxkzzRPaBBYLT1qRv7dwefipk33h4ehD3XEv4CZ1XxYYySyFMC3L",
  "key9": "2mJRWnjQ3xmNGY2xsqWoHbiRNcbGdfNrSSM6bk68YN9Mufmmhhjeyv35RysfPbhbNAmzwJQWG5BDiejgZWaHtMED",
  "key10": "3aTkP2Qndn3HrSWopxS3TiEptEz8SvGkhTz2Tg948SuQFomr61J4b9sM23m6v5rGUbnrPMxgqEAxw9By5zbKJzwQ",
  "key11": "31abkpJfEhs1PKvL6CK46TrPZbjuzZKcanLWmmXsq4gWXJxbToE2NPL5tLjytf4r83AX69M7QMRHkedXxWoa4S8Z",
  "key12": "2D2uq9nHV7ox9hrzPacfRC3U685VRu116Kf2YSeG6oDwaaKShYWd1Hg3oNNewCnPdMP41ZkoyunocRkwF1YLsV8C",
  "key13": "3JY8vJ29ypH7bjZUzmCzzk2MHjdCr4FPcdg6vwcGD8osK5B3aKaYFAysdYUN1uobG3RMmPsQS3PZiPUPSgVQnYBt",
  "key14": "4A7kEqGbmjW32BBZGf5GWPU1fBaWcNnvvcwys4YNbSYFX9DdoJu3wy2h18c1j2coieuMpBEhoqEM7F3p232eSULx",
  "key15": "2stzTarTMt78e3bKvSW9cJvTZtKEwUB8CdYPztnLAdV211scrpTuBwugdWmGvXkpaXA2JDEDDEivpDoNuw4qD4b9",
  "key16": "5gdwHm24FGK4SyXDST8Koaru4GkENkk6HqvXuF3jMLcHS9ZQq5guqJaZdCeNr8vpXxoA6SH8RDFEtTi4sDa22y2g",
  "key17": "VKbzCPsH4N9uQXUoty5whyKwd2ARQQT95rbppnrd42dLoPfQJV8sE9hiknAt1NUEMJWUVQgKNtx9P3u6NZf4q3j",
  "key18": "5UzvGppvkstXaMATJj33fFSePMDu7xDNeLRFrkerpjiUByasgoBwxXHpmcoWnevJ4TzPfF5VrvXQyZuXyvteq7KJ",
  "key19": "4Fng7c5tBwJ7VqA4JFQGrzmAAxLmzK4dtTwrzb6gXGKtp5VJJGWnBywgjBLdKbNTFZnrfx9NvpKtxYzn7HMPsANa",
  "key20": "5xgLxGQp25y4CZZJhX82UBN2a9c14nTG1Ed4wvUGcEZ8L8MvzaKknXkERabouhxraLW6Lcs3tBshfuMKKoCW2KL9",
  "key21": "5NWFkPxZpQVfjcZz6u2EgCRZwZqtPDzcdkeg8dcUfQveb4ZLN5zWz3EWVohQQpovnqKwsGybxPrdyQgAu1f7cDn1",
  "key22": "3U2oifprqH5w3xJxEx4WofET88XWsrRAT1EeJcoAMrb8cGiXhmxqt9YT9Ex9vewBvKMfnjSXP1dSV1tqQUmqxex2",
  "key23": "3J8pGio7sLFooigJtDNySgVBXXZ8NPXXpqd5591QruRpr9W9n58pZYRdoa8GCLrXVztgTKjxAMJsFZAfHMatnWuA",
  "key24": "51duTnzzR5PkV7LKMUC3vCEYVPriW9Hh37F397ZX2AENWmswjc769QRvUut1m1LrcN3QuE8Z8SUsgviKqMbiDu3Y",
  "key25": "3rFKjQJop8eLDvCpxKzArpwibMmyAYTbyaQBxvDyhp3XFisbtQkTXrKyMCoYF88CySNcTYA3Z1PQqGJEyB1safue",
  "key26": "oNRbjUyXw6YzG7HpbnXoomxA1MxS238NXxi7K4KJWsmxyTpoM5t71uYLnKbWRNCnV3XJkuL6RbcHmriPHBDjxDu",
  "key27": "3N4ZiufVPXQb17sdzj6Uic6Se14wLPuztgPBsVW4iB3WVcwTN35hePmZvZqXAUC12RFqS35pFzGH5bDpj4syRNGA",
  "key28": "3A7jagiBaL4QBEivwFUqrrpEhQh3dUNyzSqBaccjoKybGHeskG9ww7jYzHeDyyGMyYYut8R7fiqyHnYCaLKcL2a4",
  "key29": "2o92Lsu5W6UzyToCL8z7a9GtdmHvRkpY5KexML2NMZpUTxgMe3RedSuXHYhNuk3J3uu4dQoe3m21Ffzp3SXWfjre"
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
