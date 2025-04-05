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
    "4XV3v5jvekZQKDHkD3UchBMpvmCroQkJzgWpct4pvMmxd2HCpjcXA4jMhkdyCxDKGr5AYqY4MdXamDrv21fGdQYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEHkrL6mAY4xyUstqR4Ak1g1RB7VM5EpL3fQuLReBbK4KVHSAVFTqiEoTFejYhmM6aVsBqeu2seovJqfFXY2sm",
  "key1": "Sn8KVBvwi9FiBvE9LFXkBajGJ6mRJxqce3bKbp54WU9XLjSEEuww94SkXfRFr4kDwhM5VkwPmJuDCMi3QBC4xHk",
  "key2": "4YELzXyPA9cxDrf51c7BfzGYZTusUPsVPBh3ggPgrhnXL7342iEAWUudgJYPdFVavo3UnLfvcCbzS9hBLhsycpvc",
  "key3": "4NH3PCuaQsUZpPsz96TtbpJV3o6yUanAVnNj3VXxHm12W5R9ZMJgd86u5pMUHNHcd7uo5JCYwfEHGJmJsTwMdEMJ",
  "key4": "3QFaPLeSRe2mKV7L38jE57Hx3VKFWgcWX4Qgh1REpxXJmKimLwhL5rmW5QRp9QwqbLdcHmLwaiHfRm9dZ5g5Mbhi",
  "key5": "jfnRSCTtEQvVLEqvcMNK1pdComBfigp7G2To55vk6QCBTknZUap24uAD5FafQPFdCLa4Y2FoQDsBaKS4h1HS6H5",
  "key6": "4HKNH8oPFynDGaLAGivc1uisqop3karbdiUVoTYQ3P1mduUrmKry3ovxFKGB8DS88WdsUouDf1DUpqrNRx4CaeBQ",
  "key7": "3gdPqTJhjMvKyEAtR2LxavufxGyoNU4M1VUjMAKhB7sFPsesbrzWeMxNfQr7j18iSA7JyECujZbBg9mufjwyHrQt",
  "key8": "Q2N4n4gsNqDGKbczPCGGjdrBFtVgS4tjkYa7kqmWaDCwBvP2uTMthPF2X4FPiByhwupVuyvR3NuE6PiFU8kCnJR",
  "key9": "GA61nJqjGLG1hYmw4XEzMMkJMYsNm7mPZJSCyAHKmYvPUrNbXGj16by6vupXqwweL6XWsNpsVYBYNaxYiTsMxvY",
  "key10": "46V4UV9Aw9Xkn8WR7ZbmVosim7NEbNw4BfgyLLPebLETWyK4yssAvqYSkecGPiwfeTzQpiuTVifvc556X4ZBCnMi",
  "key11": "3KKCgrrQNtDgkKPaFA5bPwUMa6hFpCqRc8hLNWjUh4mgKZyBHGd3bP8EVJKHPoSahAYYw82C4NkyPPhhiLkSBYkY",
  "key12": "3tFkGDSeQbb8AVWtHgaQEtjJavNroc9ub9cXynQ49NMgJCsom26k84zMJzA1KawTiRf2mu2y1LMN1xjty6YbPoMU",
  "key13": "3663tGsLH2Bz74BTSCf5hgc7i3TgES1rCzHzNbzgtVoWRXdP2DYsmmMR9J9gnue79d7YDFnkinK8s4gXq9CFb8sS",
  "key14": "2imZEYPfAPVgY7SBPdDtvET7EhswTHeEWvLwa7ia6JomsvwZZQRgNnMDSRtcLJxDVGVvRwPe3eHinmzHWpwocpca",
  "key15": "TK1qqZuqtFHDr7Lu7J2iwGEnuUVMnw5M5GG4FHp9Fij7P3VFhseLLiCmzzyZK1s4zxaVELTbqASnjyVCYDkP4Vk",
  "key16": "2sinZdj3GLKbW2ZmRUqtzuyCGP5WCNkoxBCZzbfpQu1XiaKo7xY94m3ogG51mhgu9juAbWgYhCyJLde8MgLm4AHH",
  "key17": "3QJcJtHD85YcJcNySMEmtXfSYsQGLXfHwb69ZzfyqU1kZiMzX3eURwT1KRRie8FHkLezMjmY3eKhMXvfTCDuvX3C",
  "key18": "4RG2MJ9XnnCE1UseP3onhKh5a2wKSR1xFjeWZYxR4NbTiQzMKtKCT3zP3KnMFEZeyQCqsYWXmDajFWzqeqdNcSC7",
  "key19": "1qu7XxyaRtDuSUVai2o4Pfy7xumvmX8xphJDxPtKQexoVWCjEbncdEkGqm19NeSb2SvPcmZDFxdEemewG7Jb4hS",
  "key20": "4VpnWPa6kUniR7JLffPnS7ZekGhfVLgXdrerjNxu9xRMrYazZp9oUiAtRgD5KeocrUeD3UxJKjvefhADGw86dDjo",
  "key21": "C7sAVFjVFfBqpoYsyr7gbu1e2YgbDUd99M7Yomjae94ZBU7rfPDx7weAvuCXFKvB9GqPkkMj3amdSbf96HFLzVB",
  "key22": "2Axm3G5t8kp74XqRsjjaH39eXiy4E2EsSuV9rBwbGXi6NoU3xJ67rcfJMQiYtBQn1LZGbVerXm7eAKC2Lj2HKe6J",
  "key23": "591qNbPVJsLZsU2NwfrgAXeuvMRaZ9eaGPN2fx78ayMgMpSZK976uFFYHs8ydQ7JyRu9WqUYVvAHrvk1usAYocEM",
  "key24": "WMVq16Skyu74idaFwyqEpkfbdcSGYvP7DnE5MUvd1FZorS36tdj6EC5wghumN3pNgshad8YN5kZ3FUgVStCcvM7",
  "key25": "vWUcT3CbgNuZUM6QLDnEbNDJHCnFQJqWqzPEJ1uSnYrtCPyC99uSLpwz9hXAvfXNZfMu3FvcDF3LcHSQUKW4tSG",
  "key26": "42wo9HMsNb4g8bJhCR4zbZYYZYR7d6kk6PokSs51R9urs4khRuQHY6C6h4S2sduyWEG62eFGEL8F4g1BapNb3MBe",
  "key27": "4fz9HEboZXWjY6ddktE59Hvnq3frmvUB4BjtaZDZgH5ij6pyhWbPoVFT27JhexCHRm1NiZvXGwhnz6UCbfGsi1ej",
  "key28": "2zRnQgijF3J82gnFvCM9trkVoYFjjF8E1uNdVKFXPrw2BaPf5rPCD1s3M4p327tUVQoxP88UZh4nwuCE5yKMxMhi",
  "key29": "54LyzMJg6KAQZEQghBE4ppdofK1hRhnR8hhHbFMuuidHWM32hKSDv9DRB5o54hYmV5r8r7oyV83oPk3xvbBvHZhc",
  "key30": "5T8DGiM2KHX2FNKW9gG4nmfKkH6vR3TsGuWM676VQGCU2uUFpSosVVKivah8KLDk9o5rDWfnjAuLf31usiE2C63z",
  "key31": "3WBDQ9Swsyb4nXpw2u8JdfETtLBVeJmtg8UkUegR8vK28h6qu8T35ypaDvktpr3wobWW6P4btE1tANMnbjFvsKoW",
  "key32": "2BgaPFhKRbavPypVV4WJoj39RmSLJRCWGghHPNCuxW2kCbtXeAxNWUwVeXdghLsvnK7T5mPGqZFR4y7nRL2THoWt",
  "key33": "3mozrVLNJSQgdfcUTaWPTmHd7Cz77Bb9dpN2dgKqpUQEsKnS8nK7paDETwgTFMVPZYLTQVz1g5aZcAHVpkBq9vAz",
  "key34": "64vmfKtURve3CdkNZQDfWtFtvVTBjXTv7NV81gSLtSUBpb18r6ptCHVitYcjiL5ZJS6HZve9gSirSRVGc3vY6ZDx",
  "key35": "4DJaEWpsGPHbK9F5KvS5D6Jb4HvAZx3GENR86uZHYbuWxz1pvxn562EDXaCcB1Lptf81fp71uwL7qDqKwTzfAYU2"
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
