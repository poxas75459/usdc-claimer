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
    "31H8vcYfLhsXLCsAtXU3eZAEeTU8GL3gBEuTNDuNZx1bPwfyfjyFai1MrLG3y7bNVVj1rpWuSGmdJe2GJsd1UeZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2roPRRZmapVcXTXfbuRUmFYqPUx2myh9zdfXBwjotyeJCqDyzJVhuoghBVHco2d2KEEdkJg2JJCfcoQJ7xJ36gwj",
  "key1": "5adMoNBbycxP9BYSRdY8KU7MmuJrkq5E6NSnfnZKFcn7uCvjbtkDgHYoCfLV2YhE8qMMbFdmJsz8kpDHf4P6uLoN",
  "key2": "3cvaQXiz3SpFwwKpGL4eVkcTtiJhwXprRgZahd5TbCvPq3ws2HCZDNRiqDsNHnDsfkvAqq4vQDcUfaCA7yj1rDnS",
  "key3": "2mN1SodTEyj67f7X1aJCA2t8u1yzb8Wf2cyLUVGmwhwHhX4EFHKAwzsoaLRuSRSP7BBJFgjsgPdRUBzAksDyNQxF",
  "key4": "4BGMYSctFCds4b7dCtzFj1nbjCZzKm7DkS4wFMjPrucmvXiBLtGeVbR1FXeE3hFczziZuui8gfDZ2xgre9jwjCV1",
  "key5": "Lcs9kSEh8BuJo2Bg8H86ThfdyMEHu4DBsUYBb5o9rSQnyWcsRsBiRjH2Vsf5w5qUzaCb68mPSvD4z2m9vcTXfkp",
  "key6": "3psg26dx4zQkje9MKs26LTswLnEQdqG7Cs7REwQdBabZqT65g51u47JHN5Bw9i6m62XFMWnkSV1gTcBgGCZEDzQh",
  "key7": "ScZrKMqYZgaCENHY6iN2mworhHMMYqxPyJbhQEEH7jGiS2nRjVmJQq65TXQyj7fmmujirEP5Zi8b2KSuo4Dmbbj",
  "key8": "4QwQjW6vfjwjXb9SafxJeyx8XQTNZn1UG5m4SinQzr1H4XG4qJcfSZ6ppqHiNk5jE5hf9d7NEFYMppbgV6Sts13M",
  "key9": "3FPpAte1vDGqoa4V9w1gkiSAGjFrWds4KbPVgnb9fgdi9CUMrTT5cR9aeiR6uXU1WPAZWN8ZGfMmYJ7pyU8qF9g4",
  "key10": "GaoRxJVTYbU7JSb8h1Zs88PddYDyaXVbnxbNChz3RysaJGHocKHQv9DFyW7kKTBxHWiG6AqN4LBBtu5UqnfwKy3",
  "key11": "4hwtrnQZCLHkHLibuYm8KjiVg7eo8erurRG43P1ehLPueQ8xEknTVuiAiw3TLhLh1MufV2GhSwQHQXztPYnMNnKq",
  "key12": "4dEZMGV1vk4mDewsrJe3EtpYk5PbHzPLiNDeVAoBiMW75Q5y1FTSPgZAzGSHrBGhFcBfB9SDLQWjdbhW5Ts4nQum",
  "key13": "4TG9nXn6ND7G3N62icPpspu3Z3jnEabqHaKWF2c4r1CWdxHmACEqeTNMRNZLABSUChFsPBX4PtA5HFoR1zNTymr4",
  "key14": "4uzk78Wtv6E8Cx9LqygxqWCimBbVpLMuLCiyoVhaZkp6zp7tkRyYaXYriCcTeDeecpitebNCAw1vCDZrWZrvZXUi",
  "key15": "59Y6YkZRNT9qNuY8ajCzkMpHnDDfFC9U5nphDmgTTB9mSRPSroyXmxkiHHQTX3Cneh1odMB5Yj4jAXdkuDa17h7Z",
  "key16": "37NmUDFHcjqo58m4dc98kQ9adNsWBnEzCk4fE7ifpfvpk5AQCesh6AT1qq24TrCP5BtuyZKDFdruhyq3mgb5HMaL",
  "key17": "L72fFh4PrTAjyBx3Xht94cJU7rYUmfjo24TGdsT1YJM36UweKRuLEidrN8hMpeF5c3ZBDRRhYj6RCov2htQGLzQ",
  "key18": "2sQfwrCMFXLffauMzn9mwmJ9yKjvjyMtNVHnRB9MHn9f2Tu5QGqyh66b3pUBJENR7Pk34NDozwDjkPeNZmU8iTvh",
  "key19": "2Dk6vP8mBNDcM1wadE4omub7FzHD6S7CSZW9y6SjPtvNPisXvrJXRRBm9qRGE8NY3PiPVeVbA2AzMPMswURgFnBf",
  "key20": "47KR4iWdN4qfSkXG8wrgH8bjzavLkRZw3DbXKmd8DJWZY5gs7DdJfeZ9EL471U828t7KNTHmVnVd3JqkySuwdDxR",
  "key21": "3yyD7dYYHhUFku4kmSzcr1euiaDujN4fYCt1LWDatpAz1iiQWDSXcdjTVAR2MmjzdKBw83TGpcUf5uJhxGB98652",
  "key22": "2vuA4X5caTMwov3DWFEjSQpr3vrfApKSqGzFvFpAjq4Sm8GQswRGRFmMTY8qrYpWUfWpVH6tPmLbKaLcq4CguCDd",
  "key23": "2FVcxAQ25LkcGn6nWdCA4PgQzuasy8FcVk3iMoPdKNLpqFwKgyHzSepRd48j7rdPVwWxivQKY8dMnkVdcFzVZ7iM",
  "key24": "hY1sz7uLkh1CriH1vxZgLuVMLkrG2S8Yuho4m1AWhJ9Yh6beEQ8d1Dwoon1NyLDZV9wPTi8EUjoEfmgRw782CoN",
  "key25": "3HPoiGc2PDSmFT9vYiFSKZWTHhYgxfwK83qr45EZhZGjnLWfmeFzfMUapynACe1TZgxSupvyaK2JebPJAsyv2u5v",
  "key26": "42zJAWPGfm8YY3iBfNDhNu7DJ84v4PPZ3tL9MAus71nA2atyAfANDzwpWj3VzD1eNHcLrvMfg4Y4XkKaGrhABgho",
  "key27": "54EofExu6HKVbnGfWqpNkGmtLDJYvS8aSatVYoDLdLpUe3sHWQoAxJFBDVvcWdSgHTiRiZ66JafAn9UifWByma2V",
  "key28": "43SkEd8rJsuMikCKwdyyJvmxpTirTUHyjGx1k5YajExUuf9vLUjxDHh9cxCB1R8FCtjVjMLCG7uRyKrf56FvmZVL",
  "key29": "48r7V1wjC5GPxRiQJfHMy3pGfY6iMosaVwmFN1Hx5UdwbwjufhjZae9sfBH7Rj26jDHHTSSMybNLruxMxWS1amK",
  "key30": "5B1y71dvzSinftB6RDN9tyQdPjQigKFLW5wuVHg7jGd4FxCHroRn8gJVgGFLTgSDjLwq98qpzg7f1eijUao9Z3AK",
  "key31": "oRkg9hymwzLPAQJWxLTG2XL7LsWz8KHvTfBMY7nbAmSVsLdfEuFCKVYb5zfGq2DxBT5x7tieDqf181key8SjKrp",
  "key32": "2WpjpPZPH74WxtMF6xgRFwwsSDfzJCPhezeLMz5BmKqz7uP34unxwV1Q9nXTVLRRW7TT4QSJsoVvJRaCETEmmgCs"
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
