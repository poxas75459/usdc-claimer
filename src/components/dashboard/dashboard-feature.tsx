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
    "58nFuaGH1KbuwnLapJkZKkijuH1DFJxd4kV8shBaaTmWnHLAGz3C25GxXFE9KDR11U6CW2mJfnB7vw13Arvf7yFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LkwgzBeQiz6a8EdzUrZhhaG7aPS3RxVhp6sycKF6yg85NS4cTKuwpv6o5BBmeDCMVWKa3qYrZpX9aRLtGCC2hY",
  "key1": "4BnoSJFhdnizXsaF5v28qdv35qCb77xhFpxXLEJatqhju49JoAD3d1TXNwaNrnHvkZpLfsvcVM6SC9XAckoFnvQY",
  "key2": "L1rqJ2nH1o5sRmBxxky2yiJLu7NpCKgQp1rG766QQncWT5mTMySw1tKLRrBa6GesYJBwPyZxhMYqJqyMMFgCiFP",
  "key3": "jVxe3TXKgFEdSu5SbdoZSMpugpxfXtQtFaH2MN7GxaDe3eoAaLKjqJyg8Cr6fCPL3ehDJ3yTB516BCqHuTTZujw",
  "key4": "3LWQKeQfmvxjhQs9bmtdXZZkpPKwzZLe2MiTck2PKCvXApFfU6SXs89mbt9rH9F6fYZXimya2B9R3y4KAMXymAGu",
  "key5": "2xg37XxQ82kTUbuUrGYDZdzEiQsGgTkeEJq4TzBKZpKzpNrjStwyNNs3WTzAbJ5gCkcZdoHM5bTMJGqBN8S2Q6zq",
  "key6": "4qJCRfhTJKxErakufGCQW4McyJboMprh3Ci6MRoLyKKcCCstEMLrpdJAiQieH8zU6L4xtRhe3YaK4YDEu9BPfKji",
  "key7": "5yuMEmzSuxVyxoMa9bj3pM2JtHUE6pBoYGN2HhBJrxzi4EcrbNHNArfMGZccgJELtGNZGUqY33L9Q9ZxYjgSBYPV",
  "key8": "VQ9rx266qdyhxgcCUmcv6iFqwLEg7u226bKn3C6mm4HdXaoBqw8VjwHT4AGAmh9mHW17cyh9xYkCXVULs8MGw1k",
  "key9": "54dk5jisiW82RTdUFK6q2QS7m4PemUHJTC9aXVF5ECQbiR9U2SgtqS5w6ua4RiEHKMkwbKZREKrMELKTZsWgWa5V",
  "key10": "5dZwoATPQz9taiERtVNMKi25mi3brJtFNFqhr5MX4cfvALArGARUCWCLudaCLD4HGsMLQRELjv9QEmXAKnNwQRno",
  "key11": "xQ9srWWbb9Sf7n9ANojEz142BK5TpyN8WjLV4VohdJjGpg3rtnkBWZAT9uWzJBmXbTPUixM6sPXKGHVocJtv21c",
  "key12": "PvkkiyRXmbMYACoZjWr3KdkR8n88SBPej9eisX1r7dmQXrWyyHonnugaro6fUsENwoFknuKNRcdwrFrERB5iQS7",
  "key13": "663Qy56Z5AwCC74Wj5sXMjWvxAYXmWqeqTJu6gDLvdEJn1FoXgnnuQkUUaFdcofdPRKVKwgoZcfCWkDefLZPzmM9",
  "key14": "3ZEYgNW9fSJd2u1wvg1ZLHoyD2e4p9FQoR7rkvsjGxp46yuo4aHacov5iAUjcRTLNggjM7n5nhfevr1hA3yUuFBZ",
  "key15": "5ediwsRvMPJ5ZAckhTdxwLt6a1K2jifVNXGgUwMFsexoH7QvXivX1Bxonrjepk2G47QNZjai58Y5DnrcxXnbQ9hm",
  "key16": "4XHmxscGS4uifjZpbtL9MycR5BvCfKeyQpvasZuWJDgaq8iKosnLoYKoTb7GJhdf9xYywAT8ef5vEKrsPMSjGar",
  "key17": "2EmxVN19cdmoZupMiegmW2xRy73CFH2zZ94MfrYM6R4tJntbJAb3W1r72tTRN5oQdaD1m5wPcWdFAnK3FzmtXqgC",
  "key18": "5CTiamcskPpRhNqrakn8dzNyoRXLnDy5fatZnQW8EbTxDM6mpydKxJh5Wd9DUfViFDuKHAdG6jkdk68N88b5Su5P",
  "key19": "58BThCrjedqrSZUEn4mXYtteSprfWVFcv2DHV7URNEhmemC1Cmrd5rVHfccePdWiu8cS1n1cqSes8L9hGMEJ3DWo",
  "key20": "5NcoeaLWR74CfgskHm2ndSnvL91GBd3ju7sTGEyW6ch6yiCqAKsNhXDcEojz3JyXQmcwGFwQ8uUyuzG8piDf19j1",
  "key21": "2kjchmLjCN3SAwLXxn9MPoQWJw86Vq12aTq78KgH4JKnAtUxEPYAV1cH87h3nwEjV7BW8iWQrmbFYy36CzgNCaRs",
  "key22": "vogm4yKuzUyRqq6fF2bSe18rWTSuEDYuoepujFEbW1asHEq71ks43UM45tPQsszahQjFvebLD781Dz4iaTh4JPe",
  "key23": "2rYcUG86CJUp9VSBTrcqCrsHKTMkwvV9XE9uY9sm3CchJEEUbtASFvpdDDqQ2Lhi9pQpsGMFmhY4PDAjUHntLwES",
  "key24": "3g89dL1tMsBwArgXwebe5fyT1eYkwBZn2BxyowQCjmapwLqxTywCVvWH4EZf7PUQ3X1dBLttBb7JRh5fzBLDm3uX",
  "key25": "2Fwexmcz7m4QbGZv8eSKQGLFbD9xxQPQz1GQJf4k32AW1fYoJ5R8C5Xkz2YVCR86aw934h4bSUC43PknhD97hJWU",
  "key26": "mMXp9rXHFXLf1UZrt28Ua8op4Bu7JtfbHaNtpguwWjhXsjLtjGvnVRPV9YVe3QBaesgVq9R2q4mbc4BL6PmrgbZ",
  "key27": "2oqeXa3UxWwpb2Gy5tkhn8L9o1jeBGJ6XzH9q9tDFYwi68ntftpBaDCeaGW24HSrc2iA6gKx3o4wjSSDLZt6i7LS",
  "key28": "5XQ4dUQpMnHoVsinMWn23DwWop8eAD6fCGBQmN2iKWFM2XERgKigRb2kkWdVSZzFbeNR8G7LT5qgemms9Qief7iy",
  "key29": "2Y21P6xFR53dv5UAtgbHtM3SKSFzP2PFsYU747tyba87QePSkRPrwXrGj1DE2FBg4Bc6Qmtgm3i3QqEFTqrNfACF",
  "key30": "49WcxkNzNYEriJe5ZePSv7oTmsYCPVyZq3RtkdbyvpHzfG3L4hZmUnKxKaXUeGdzn16NL42EtAnDKTAL2KQ2jrnd",
  "key31": "3Xckr4HBo62ebi8RSmAFNXfuTKVrsK9cbUH1KDCpxnnCQYYnJB9oRgaTQVQoEPiyEXpYn5c5EsBR49BuBLkzsNvS",
  "key32": "AP3jg3RitZTVEocprqKKBSTtVJQL1XfFFjofwW8s1RRHig3gRzS9EX3J46yHhBGSGc4T7oGoVoihfmHdWgoWQth"
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
