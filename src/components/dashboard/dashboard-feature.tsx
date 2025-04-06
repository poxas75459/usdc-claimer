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
    "66dT7ddoGZDs8KeehfaAEEywD71nzZqPgaDcXL6svFfGKrMmqxLePpbyBHi547xv3AxYatLD5s74i1xiNmZV5o3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333UfrJ8Snr1zjPEwwYAjZaEnpsYpG9M7NALZ3o3TNF3DTjyNGwovWqUgvUsZaZp1sdZ3tdDT8JnW4auHa5S7Mm6",
  "key1": "5ip5MHTDHmgLa7kF8rXTii2384QdprHJiXE6pDrhNUZQwc7j8bZVDH2nFM9qGCNysETaSn1s1GAof85XjNp2JyUw",
  "key2": "5kVSqM3V4PoqbgtiyLAZcxGwgmWZL3ikupbCeKSgUQTSvpu6jprjoAA8BiqXbXPQkCBGgiRXJX5s5XhJfMu1sEqE",
  "key3": "2PDxSCAV4RNVdkyzXRU8s8xD6wxVAC1t5F1BAW93XV4hqpSKHw7p6ALLgr93FdzgcTDhs8PiFC2X2AeoJugE4Eei",
  "key4": "3X1yY67AebjVopFPSjnDm9vHdzZeSaHKsDuWWaRsXNRGyjDm9xbY33U2xY4ouPn8s5qw7zdwBM6mNQro3hXLtsNH",
  "key5": "58C1eM4LaKHPfwfZ46kCKNVAA2A6PtjUUkxNvFW6LiRCRGiW2hotR34eyLE22Nw8cemXs3yt8de5zhJhaoom8ALs",
  "key6": "3Dxsqb2nxLUHSLronuX9rzo3uREtShXnvzBJ6c5Xjs1ncgk5XH6d5HLH8yusSKQ7unQbkpXmKByR6UiBBx9E5oBS",
  "key7": "5iMwbyz8TSnPFDpTaWWEeGfsmkzFMLRN7qHQHo52psQB2m8xzxTfH2rmn2epD3SwGqSZ538HniaW19kEK7e8rwA1",
  "key8": "34fzqjoUM49q33rGDkcEh61k3RtPbqum82xYS2UEraTSeKo6oWsK4jFxRdveC2iSAjPzVrpf8XVagEqYqZotgvn3",
  "key9": "4FwCdEqYriMogUwBhM5Uyu3DuWaW1SzkwHy3JfpJd9QbVXULbmi9XTBEuZbwgNzVhsWPqWCqjyjfoqDu8FJkUZiw",
  "key10": "3mC84uaBTFZajhk4UU8Eb1cJxJunLHrw5vax2hprzSy1cS164PSHmMPhQ3SoVRKpZjW9YJD2xG8ADWZeMaurCho7",
  "key11": "2vw1MFp9rsNciyPAey5PuFLvEohD4N5KhiemiXACS9epjMnHdvwhPqCTi1ejsaQ2cevGapkRLVQseAuU4nAtCg4n",
  "key12": "22MVJRcDmiNjggncnXTQ3nWtrjssdQNAUBQWgdKfrmcWKgNC4FLYyfSPXycnTG6qcbuxT6H255BpbxTqJGDopkAM",
  "key13": "3ndEEaNi9XSFQW6A4Erj9sc4zTAfu5aEcyQq7uhicR8y51Ws4DYqcfuvi5ndGbvikDNyY8rmK1WNzgic4i6hnahi",
  "key14": "4cGEs8xDLmS8r9HHtwtsZdgyj6NzEAYv5vzwq1ykU6RPreFvF9QAdjjYV1FWXSX3RdpSCeWNvMJQ7j2c3XUGsPAN",
  "key15": "3vvB8VydoY2f9VZaSJwreaTZvjxVKSsPuDD6QQ96mVwgdcpKmAaa1LqEd4TpnuVfdjPZ9wStAZrHcxsXnfAsr3Pv",
  "key16": "4HA9mj5ayFpKKjd9xGmfkqnj9ajsfYc2Jpnf4GHUhhY8kias584bVomWZ1ttUCwP2Tft8nnzZeAbdUSNUQZa8gDV",
  "key17": "3uH9kctpDAcvrkP7WdRKLw6GA41HzLVXwRwcnkQnWbgsWcLdbRDjcY52NoiDwJgSWAAUiBN6uzVds1uQeR8TypvZ",
  "key18": "4UeqSNRJrNAp3unsYvK87aoD9Me5LCT3JxrSU2KBj1y1Ni3PfC5GkRyYfNdKPEVPtxxLkJanCiEcnANucW61VANf",
  "key19": "4s6rMiB2qm6Xm2aiZnzyPGQC5rs1P8Dr73uGyfvFDorhYdKLnGkVoqEuUv62NtgC9wYVusqS5b86aDDo8Nb2aA6K",
  "key20": "cwY3MWG3pPeKamyTeL9s15pUApSuys1aHizdBdjdjA8Q7bhCt2UUpUWYSZRRt78fsiiTebh3nqmfBGMg36FL2nF",
  "key21": "5DADtzpULw16b4k1PYNDjSH9Cwr8WSmtU6GvhwnE4dm819LC9E6VndJCbaqFcxL4Z813Sk882j95SeAaZWUwkqDN",
  "key22": "4x6ruacn6qWY8PMm7ZJemG1EQ3KTGWxWgWiWbGKyBWMpxr8dY61APZntbygMpHJX1PyCGerpvjMtoBfp268FRY4C",
  "key23": "56UYfDUbkC4srUJvrjKZZktCRRtZNP2r5hmVyK98jPrT1kv5Lgr1KT3XxQpPgUNEqb82tmAckVHGVN27w6kGpTjG",
  "key24": "251Mra9niw5XDsPHbKKM51Tfk4NFveQHp2RQG6zWzCr93ewj7pc7NLR92DEZ2t3S7dxF4uJsZhy8swM7pfVjuLi6",
  "key25": "3QMhRdaBfvUfoAN5RNRquhpSdBgwCudUTyTfdb7e9utZ2qnYApuVR3BBT9YnWwcCxCNmHQePGH5kXcmGFEXHujYy",
  "key26": "2ptatWZfmBK3ey9EfzGhezwy8JUvayS6tNsk13gUi9xwYofxotSXZPD8FL2wcSFXpxgPfJ2tTyyTgBPMoJG6A7bu",
  "key27": "3Q7wQUSJuYat2qZdqn1hoU3ExkzVrAugcS2iUPUTHLxYhCfeBWNpvJ9yLp9yiyRbdLtH889N4xMEthGJ1cNLcneL",
  "key28": "5xwKdMuWjQjSr8SVXcubTQKsdC2YWErbd8d6urDkNJXvwPVRM7BbEikDAjjXkNHGAqRig5qDzYGMBeCstQLVjbvF",
  "key29": "4XiFgU6YdiUvYUvDBiTvm4kXsrPCGi3nMDDXZyFirt4wHuBs1srB3gWcbDXbAnmQFpCDGziJTafmdX3Hjcrp4coi",
  "key30": "5WhbFE7YESKeDrUmmcVMQuN2R8q4kdqaMuCrwN9U1ZKaaJnuq4VuUwuNk1seELdbGTUMEwVUqaCWBG7aaJzTPTpy",
  "key31": "b2ZMDdZBxVHgNdzbAZ8cLnbZ8EFCoRbnhfEWzogEnXU93C2TwZXRL5EqNuNqt92Ppf1XQDrg2zYwF3AxiB944D1",
  "key32": "4py2bsf91uzqpyAkhm2TsbVSuGm7wPrFQJoLoskUDfKcktoEaGkTGdoRaYttPhB4XUMy1z4dwLbwBxgA74VNrehW",
  "key33": "63mV5vbvpAx6x3eEMLimkExygcgM8smz3f9bDGYWsaLrGgB1CVsBHVfwMbvNmUpTVc8YkBc5Z49rMXytJYvxyQZL"
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
