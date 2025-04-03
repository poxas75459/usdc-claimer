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
    "6kNh9JappMkJKrqhLGevkexiLXC2Rt5vxTLjAU62kfd6RWoHw6SW2f5Lysx3iGyMEwEfr2Zs8aRth4qVpFKRNZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDMBPScBB5XSwTnXPJCQWsrDaoZXXugnccqqAFSgA59B84Kqr3Vnv8r41hrwCbPypESexG8cUUCG7pGiKjC3F6f",
  "key1": "4sCoS6ttZSEwT9kovd4TczAiW7jREsPaDtCiy6HmMRUKii1Y2Mo9q7YMtQk9MbpS9kBK1DNnkyFf3X193Wyqdmvp",
  "key2": "2yRps8EtKBLs4P5e62JVnsytnYcxqCguqDbYVEX2MXGNrFCGNsjWnxF4ne6SDeMPoYZnEge7hS2xc6Re3SB5Xhns",
  "key3": "489ndwRJwESPbwQad9ZvWeroqEq6wm7ws4FEGFZgzy4Rxzhce4bnmABiVcqNSsZMEPfZnusygYK5ELvxMksNYmmk",
  "key4": "3Ce1gR5BYPCSPqWak7fxPbHLaZwd6wKQpX1zYmRYJNa4dkZTdWo9euSgpCUzboPNeKCbxukm9ieuJGUUj3gLXsZ9",
  "key5": "3yAzBMvPuCH1jst8SXbtVDxDMMBcC1i97Bxu639vJ7pMYVxJwZYB1dVdiHzZCEMs6jAepwLMZqZXbT7x8cShVfWr",
  "key6": "5FYw9dkUTPejaszWa6K3j7hxCs85Wke6obiYPMRbqWjG2VQnyMHrnPDsBBQggGkYaGapiZouukZsMaryvt735t3r",
  "key7": "5TVSY3QzBTyXSG7oA1nRYS6bHBS1GPu7wTCezfHg73Vi7rbtePxZJsbcfnUZAvDtcsFv4vG4XbrA8DShqyiMCQ2c",
  "key8": "3dMSZRXiLqAtwCrynUPFTDrsneXSnz7L7goyurLepqftiwbwHrsZyzjpuYHZnxhMT1DtDHFXoxd8TA5vA82iMdJq",
  "key9": "5X91y47b52uAsL5S8iXURBzJ312Qz6Q1tV4CgdJx9N7kqDVFCsmJ9SQbNtMKewEy8E1iJaZSA11YVWU7EoniqWVR",
  "key10": "2LvJPgR4X158mAnTDsQz2vbUBRd3q7foshjXGjSuJNiBuSjgDZcwJizhaSUYLUxttm7491d34oCQP6CbwJX6oJWX",
  "key11": "RLwb7BxohNWtoExSgUPoWfJ7XJDbv2JfPET5gMRe6SNge7wrqAAHvfbv7FAC2rF9XJhUTGFc1cJ6Tr4SSypmuQY",
  "key12": "47dioCXxVBVSJB6PPyJNsXDCeNsdiYj29c1X5TAnnBMcLNXXEXCXmUx6SFGVpp9aAGPr5BbCSmR8pfTpZsNuiDED",
  "key13": "65FfgrRtjxWmJmnfwdNDbr187vDowyAUPe7ovsEpYu2jFyL87MTxH55ub73aeRxQk6LMhcBKobZA4eAckMBdHoxU",
  "key14": "4qCdYMS1w91q5sJTaLm6X4k7cjcRHLemG3PEPmdoEGa9ZtM6L4jLWnbsejcU8wSPESZDe6JufepUmwSCfEYAtFQw",
  "key15": "4DTSDrFchbEZdukPTnAVaA5jtmFRXKaJbrh4etZN2T57F5FCfdynQYMSqDSRw5EryV9AtkyvBu8casAhbQtPf9ay",
  "key16": "2koV5ZqaD5VsWUGai6XNErBqPPKS5XRzt5BXMmwkFHy2r5NjjUAsns3h2eonmZa2NepQGgoc13tZWGnhUN7ggWYX",
  "key17": "5EigfV6WNiNnCmApPrXzNrv6yCqNTmN7A2tWcTgR8Q49K72g6DfNbFd2Uofu3UouchvLZCDbPA4oNLTpVNhYahGK",
  "key18": "qjwobVFVFZqBgKPC5xrxmnkWc4qwjkKBjau42uqErQTprFJs6owHDnJ5ZDm9hbUzmnrUm8SDkZrDVXpk9Gm921t",
  "key19": "33RC7ymCMHLUXmmQiJhmGeHFgCoVVrFkbsRpkRrGb6ZCd6atgks96wgHwhXKryzdcebLDS9UtRm7MCnMBL6hq1hw",
  "key20": "5pxZwadxmpdGCUE1WvocvyvU1GSk9uoyggfKocr5BbthhbnAfBWBEpTCPSuc8PvqVVcJ2A51tjjhGzTSu8dwNzce",
  "key21": "3z1GfSCUigHu7SehueQRrkRdFkqd8enGjecXTVHmnSreHaaUqhBQ1SBNrJRCg3X7Hos98pAgEvuuJUVwZUEpoHyy",
  "key22": "4PjZ64UztEPYfeH1Kw8Wdn9NKVgYmYGWN3vGqDTZDMHqS4q4A7TSnZmAzc6msejyDkzqx8vVympk37sR1oTSgVdM",
  "key23": "LuZM6xAAw5qfbj47UiHJpYzMgxreZCHDQrmJc9c7QQVoiCXJxi2n4D2qwApAzSTQ8F4MyYJpREKXZ4EXbtSd4A3",
  "key24": "4Ebp5N8PPSoBLQqFEgLDEBsyH7hVD7e9wYhxTHDm4J7PJgb9KeJ38TLDMrZrENgsU2fFAzUT6mQLeY4pS5v7BRut",
  "key25": "3YxPsPJBoACiBcAvJTxKCto9iZsRm7CgfQ6nXof7Xk6MxMTmxvbPSMCgzkXCTAUxSfjZuBVUdJxShsEHnagXGMNa",
  "key26": "2B4jXSQDEomrrUEJdTTgT9KobSr47k7YasTDZLnKeh4RSMy6BNvAZ3HjuxPn9hwuPrE6xVT39FK2YXGbRvb6ofuj",
  "key27": "5NFW5pLCzvFjzHSxotH4VzRQTDbF2s8w7dK8xh7qSEuMQ13ZbqfhFypZo8ycmwtusubBorAi9wHanJvTb5oTHogQ",
  "key28": "Bak5AmzKezCxXeNAhbdqBytHsLAHYRrmXoHPUik25QFtBEqD4oK19QNnK4WGdkjUfcym7GUxgUAXY9kHkvgaoc2",
  "key29": "5rPDuXoxd25JN728e3cMBFZ4Z8i92b7S5zNpmmNBrh6aDJt7C49T9WSUyGJHKWbSqGspPkjwXSJFSe87X2Qv61Pc",
  "key30": "3kRpdZVE7R3BjjUJLtBUX7wC9KzEpwUaxw81eLTBWzZmQknLM9Pmia4cQiaouHceQF7pL4sG2sh5Yb8VYFwqgHHN",
  "key31": "5jna26V85uagfFB6Rr57RaGC2bUHLLF35n7MJW1k2PTwkBpERgzsw3nGw4hT1HJDv6PvBbhTSxsmDs1EkHTVbEn5"
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
