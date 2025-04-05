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
    "34nyfdz8mZauNKTFo1mXVdcFh5sJ7kTaG6VHqTWBe5efv5NcAzkLm95c85uiGvQiXtMCpsYih6eGJ1jweVHfsaWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "311nrxZ3jihttKbD2vTcopXwquiXHLCzmPxHpRh9vMV1GceoLcLWPZcE2VRPHVxgCrbaf9xmxNFhyVsQekYHDacm",
  "key1": "2zriwCsTSAVLXJJVrxnK1qS2xHvojBLXa128vbwEfjwhL44euw16RWGYHxvGxXXk749gY5iwUks6mtsC4N2JCS8S",
  "key2": "33EcwmfbJeHQ2ZVzE8WLDfJLXcZ1tsXBo5wfYqu7D1JaQiVFBVYgBMpJ68gEUGHNhr9CQ1tiSmaoejTwW4MosTxj",
  "key3": "3v2fc7jhaGr9B1ykcafSWxhXdyyEMLdZyAd9hmwShLgVPkU6HsEAzghMVpWcZey6j9WMsNNRcp3jU4yD7SMumpxc",
  "key4": "3TkUubT9CVGym5nRKauzqvwxLRcRPYBNgRWadKaYpyW8swMX2CHhb3KBTdffxDxLqRKN4hYswwQvYUh5BqKRSVyr",
  "key5": "NcNWMm7igaB5DQ8UnpwzVewo9NGzVJrqFS4UMieN4pwr61Kyr8CnZvJ5GMaWTe34nMGqrzcgsnNymrNRfPuUYDS",
  "key6": "5rCiA33xnynuc5Vobi6FcLnhNgKShxihSvjfQ8i3KxuZk4pQ4LtBg75NL2aequ3ZUzznCpzZHpV8NNFw5vqzBH1f",
  "key7": "Uz4SHqhiXCsUpiFQFTQw1frR1SqKVxpJLEX2gk5bAk6poZRWY5rSpw8MWsnjD2ca8kvBW26hVC1vXe1hAY8nfRi",
  "key8": "BHcVtMnse4diVCpYbBWEqBo5qzjU5ubHsFpag4AnHsdgGZwAWHfJATNxiUg4pAhoSLZtpwNPTFGp4JiU7pLd67A",
  "key9": "3HYSVc4o4QZD1bwJ1eZv1LBT2WkMAmTrL6PEXdAhcxKwpXFMDQgAW7yxcSUc6VCWyBvaSa3E92k64KnhkCTLEdZx",
  "key10": "7hgCDgGLwx2yScEUPqGXXBkSXdwx1YmxEmFMiMYGRUyFKqRvZR3KadFj4cPrBvFfqyBA79eSbG2ybVjz73fvnmv",
  "key11": "59XN4WVWz8eNawQ3XHsBZCCXKyEvH26FpDEMFBPVapm6ihDdDq5rH3orWZ6tfimtXTBUUXV1u1FoGYdNDcfzp4op",
  "key12": "5jJGUj5DBr3Ps82aShXNUuqEdWdnjyuyXuof4gQezSyo43W1iPss7WEW6PNur3VMxwnJu55zqKgh426U1KZjER7B",
  "key13": "2iX1xtfVZurwUh24N2D8V1CpueFeZgWjAyM731AGiHF87z7WCQvH7LjA8UZpn8jBJc8ckQrBt3k1LyUFgRvUUhka",
  "key14": "UtMitDYAVDPcDAXRM4sDVxVesCGog9NYC7nQ9cxapnha3B6L6nBgUchRoTcJhdF5YFymXzfTFJthhXJgW4BqAPP",
  "key15": "2zzSjMFA2TRfMfQBj3pKMJP3tTZG39n7M9PmSJVs9QoL9YoMGZSKzzhKFWipP6Nq9X88prUCGVSaDW5JZDAiEQ1A",
  "key16": "2maRzfVjs7WtN7RAbkYs5o3BktEsif6YUG1XTJjuLY7rjy8uU5VC624BPQVN7S5rCdNX3q2jhEu9YFdZCHDX8kTD",
  "key17": "2ZvwUE2wJUafbgqWYUABsPJfdDBkfzK1qWSH2hU2ZxC94MkkBEU9NTHbSVf4LC73y3dzxjxdNbZU5TApd4B4A6z2",
  "key18": "x3TYc9GrMbUnMcEttoNWF6QWjMdvUXdCHNm2psu3caQ9v8Nf2wwB5kMAjSnaAa1Tkvi52jJ9xhhkistnnPgDnUH",
  "key19": "Ja4rrv1R2t9J8cJp8AjQGka3tRa2VXjhPVdzSFC2raHAdVCxuQEQrtne45gwD1T1fiZGLMx4epYC9b1TxffWCzw",
  "key20": "3t7TTbWg3AP4uu3f34N8EPadHzJtRSJqm6Xv22BBUKsMrcUtUp3oKhEqu5KCJUMEFLHiMFUSvbqjPVhRuqvegzX6",
  "key21": "4vCzYvnwggBuDuaQx9qdh2cmsfsHgjRiy9uSvK2UcXwY5Z3gEvnnn53BgpoN2k4Y9WTAcDt5abtEmjSZKcpSEjRz",
  "key22": "37bU7ok1aW1WEonkrXfggavMKvENn7ongbTJ9E4jaV8P4FcQWawTvyDF4UUVELhLELzbTqXcWhQPtsceThGaAJEq",
  "key23": "5KEPTtBEWExZRm3s5sNn979iQA1rddxdrCQQ5LKxBbtgRT7e1eQeF8UkUkHUuDnFg1YBtezP8Tg6niidYko5JBUD",
  "key24": "VDEq971KHVSnMHF21zaHXtjeRC6YMHzWgvhJ2EBh91QVHvGDFNuzhA9aWqmMrV3t1XxNkPeAyDrfAYB5DXTiceD",
  "key25": "4q9zsPzSAbbJtxTTvTADGQGJLZ3vuerS1jSz2pfYJa26n2SSVXpr6SdArqAg1JxnKZWEsQSBRLB5e4ufkCPUvL9b",
  "key26": "4tAYJKEaB7ctKa1qJK5zCzRcw1o2fZQ379bSTnj61Xegf635H1zW36ZcpmZXxUM5mbHAsHfEYQgr7CqELV155yKw",
  "key27": "3zJwYuZjdRkhTkii1NnbDfmyzgSV65NYkS8U25P7kFMKcpiQNaMztKcQL1YsoeqbozKBVz8F5G2s9AX8ZfbEWKpp",
  "key28": "2Vvh6k2yDyDCGbQrV46aofN6NEfn8L1qNEwMBVudJY6JFFCWaxKX9GeHSG5Tey534MifQ8ZN31cGsGjp1zrcByGy",
  "key29": "5NughyFxHykMku6oKdsTMzSG1GXVRNS22PZJna65SkpKnkUdHDoni642AN3z5DdpZsSFTc2Cfj2RakNC6HRH4eKr",
  "key30": "5EsvsZYfCGkSC3QQfMfDZMZJoUDH26Rkkw6XssjGXGpn5WuNxLKtotQPxynb9DQgeHnEH9GVww3AeAfKu4vh5RCL",
  "key31": "4AJdAvD9Mo2r84VSvuBbnPt6fNuuEBNrFZTGf8DuDRVMvB2ykzWYy1vAikPetoqi3wQoA1hX3c9xVsbF4W5hBkbF",
  "key32": "4ZqZmbF4Uvs2cg2Ri6KXDLUvqPCfC3DncFCnF4yNUPVFYPrz5qHyCrsDtagyRNJdbnWBDzAjuiaMfWqvH73FZLUf",
  "key33": "46asGoAhysvwBXpYaSPP8zEX8Mowe47BWFy5p2WJM89QVS5E3MKKb3dLrqBu71DzVpydktJoVRjhbSYs4ozqbZ6o",
  "key34": "4beG7bA1zYsUptjSnw81C9bmiBVPwfcYuoCd6uzbW6DZVELy1kdC7Stc37md77SRSXBtpWqxSN1MzwZ38EuUXRhb",
  "key35": "3k161WVKecgkodx2ADPSFW17gT6e7fHj5AsF2ZMb9xsk72SM4TUPGUqf7sdX82mBdZRYVgjk1DLJJjNvxiu8tMms",
  "key36": "C7Zc2Nmqefrr3QYwRMWZ48eAkCEnZhJeEzfzrnsYHag4W2eSeCH5KjuBAjaLrGR33jwh37UqzRYxX2D5Vz9tWLX",
  "key37": "yBucjKo3hJQHwvWqrVicrgpophAhymcGPGG1L8vFFDXs1pzzyQmfmVc242GzwmEV6NR4RZCaogT4A7Lq1scQKCs",
  "key38": "3Sn281gg4rtc2aacVXAYLuoYg5GXv7vc4G6geJndZpKdE4QLdv1ZbKcQzYDnd3taigdVhqQWyjX5hAepQZJvzCRr",
  "key39": "3KrjaGVVt1F3pYq6rhRhqJX6Nsj82KwSp5fnFEoLxZkRU1HvMdbiiH4Gs6jYuMHakG24nqUcCfPgizPM6Ep6bEAe",
  "key40": "5gzKY5KJhYx9wSRN8nF9FeFAMQpVbfL1TY3hBfitW5K9DfUsaxo4BVPkFRK5GYv8DP5EJRfVsRNxbrz7c4ARmC4a",
  "key41": "66mKoRCXk2mXjBkp5Ar5myJ4hbFVstGcGa2aS2Gu74X3Ckxy6p7ui4oDMqFxzrHLht6kpZAKk9F4xtmxSy2USkNj"
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
