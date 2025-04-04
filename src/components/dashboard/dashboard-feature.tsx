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
    "4Muh2ChFkkpbstBAYSzEZxRpfJw5mJX3ThEv5RCP4NdvBq6C7aqtim8PwjkbnxstfvQNFiyf4n8VaXPX7jxHoxbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PG79BW4RE4dt5qp8EpvSG6t5R6ceuC8S8bH5itBKSmkDJAiiyfh1NTAtKecHtnyviamgJh6yvKeCeJvzEyymQo5",
  "key1": "5jSWDcURXaa4fLG9sdUcy7D8Hom4UozgWCPcPr4vmLQU1vyY8GJzUasxQVBDWdPeTC5eUJEAbmy9Lqa7ggS3mSWs",
  "key2": "33gncrLBrWsmEnUMikVAvBsX6kcRZPR4tnDMmHpqiAsBQuAgNRZyW2zRUQSU3aqeHybmdi3eUYSYBhGg6rMbff99",
  "key3": "2PhPSLxws4kPsvYSrFu7yDhuvb9PbzWTTtaZjJHTgBDhtG9dh3b2WMFptP2VcrWTAy9PkMFvPLYWjeLCC7KqAtow",
  "key4": "cvhmeSa4dJkZUsS2eTKhNErUQpgEDA3qkJdZLzmyXzPM3AGpK2Jahig7Z5N4EcJrurpw81RdshBM5MJgLduKiNz",
  "key5": "vPQp2z4a3YKA4cf6wDQi1h8sJPVgSr8gLUyAKZNS1EwJwYaR7ELnGCTbnpnMQ7PcGrfXSYFd48V2r5edeXePuzn",
  "key6": "4fwnFXTiraFZfMnArf7p8cFrRb3TZEffKGYWKqtefydvJ4ASt1qA3LQrzBAp2KBnPa71G8CGQM7uQfNXixLQyB4s",
  "key7": "573xtzNLpayQcWDrS6ZuhUeoAWgLoEF5v95SvE7mEZ2e63zumYJXxfcm3ZnYviffXpp3aNKiPGGm5iZviAfCLyix",
  "key8": "3NjNaJ4rMbdsGHT6DCTjiqpmjrmBFdD23TqFwdHyMWPotaD8uspmiziQewsTmFFUiFSkzF5kMsR5VCRh9CbJTbnW",
  "key9": "4VxbGT9uYpPFyRDtgaB2fYYwnx56Z4nMqtCFufy4kXEHbxxkG1BqLMjTH1kiAuectTJnsYAoxudVvFSKYF4Sy6xF",
  "key10": "5dM9n9R5LxH2JqciDN2jrU9Wv2c6cUKej56kt5cWSj1PtTVc2HWnDHWVJWs1joVWp1SXXEoFHtsKj9GjiSesXw74",
  "key11": "3ob33i3QpKuLk2mojvUBurXfk5ZxRYkSnyJf8LmuVJKs1MFJ6biSmvU6dKSymDDkHypEgWwhSnfngBEYaU9kzTue",
  "key12": "3Gg1EFF7DVkyoLqFRGo49Kxd1rJecX1X9YEd88q9Bk6zGqNbrNJCpijFYk39PnzWpg9oEJSFaY3RSCmHoRUC5BtL",
  "key13": "jNUY1h6SzeH6awRM65kjERUfF2hbtEHgMdeeTtqWV6u8Dhq2MKmwKXib4hCeQc1sQgsyy6wJNX5p7tfNUGMnKmz",
  "key14": "5c7bpNFfGegE73397qz3F7KXX2BRfA66MmWpwXciuaJDGVeZayQjeozrwMfcE3JyW8EA2i5mX8RxCKUVAci7tcsu",
  "key15": "49iZZMKhNmenXyKnTUfyEH5XgPPomnuC11nwUzSBUR8tmWNokvkKKiPXdq58XvonY7qqGLfbFTPQ36zUSa5VAGfp",
  "key16": "pY4TL6NwXFaTndKfQA8igatzCNwuvPdQbBsnoKsTfZNaihXBwkPEis8oPZaPC2weM9c6wQdKZBjtRrzeAL1zptM",
  "key17": "qPuGSd7WstN3qUV7rYaxgKB6VgYTt5DfyXq7EYYCBsH7Azu6mnZ7yeHeFduBNg7vkjNMFZwA8XZvjweMfazToHQ",
  "key18": "34LkEmUWcsNnyftMcTzYC55uCy1whPeFbAHAnrgjeAFEp83BXt4KX43sW6x9VshXgXP69Q2EkuseUJCSgqQ2jtSg",
  "key19": "5Txh5L5eqCRd48Y5EhjU1KdEmqoLvNHfgfdCqUcCjU3EiTFJNFwvMpLXek6JmtjisoWQXvhp3HfYXjfSfyWMCHUq",
  "key20": "3wobWow3AhNVpoKyc2ppo8BwBTrzZj1th9g5oJwyPL471aMkwajsJFqdEgu46tPFdPMmNuBCN2T7mqx9q6s4qN11",
  "key21": "5gdFKro8zeGpcdquT3cyb4cPRh8p44A6NYt2egKMwXiKLX2D3q73xMSF739hm81wbXwCdft7fV5apztsK7ZtohD4",
  "key22": "4FbpBnDsvXrABxBVLddiJn3JSjeJnXwpCRzQ7M71DyP3web1xmL62cwCDtgwWtWg4jcw8WViV1LdgnUErGzi5wjw",
  "key23": "3R81GGYgoohGuXeQ9cdeuDxtsPqEtZwujV1ryGrRKyMPcR9ocrj1WNem344oihR1d4owUd9ECBirksBBGqMDHK1r",
  "key24": "opkdhSEKD9f3PHLn1MuKEs8GvjGm53dcY17XAGdKFhjMtEbzrLCm618RnDzhJ7AoPj5Rv7chx2s4Sc2EZoikkJB",
  "key25": "3bcYQ53uT88mfmGo8Kipk6YvjLZSuSUG1PZ5Ab3xbVDwXwWvvUmy5jE53MYgp2Ab9dvsdj5La2mtivU3y5xMA9bk",
  "key26": "QWHB8TVSdBbBdeAS5WzpGqFPLopUrjNkzgRoqxkCJynzLcy3qF5RRJQWGWPiQHCxouNnP7bw8mnFtfHVppFiNgo",
  "key27": "3P1jHH4xrkMT97JjRXr8q2jxsu2HapgWD1f6eQCHGHHxWe4qnfuX21XjGpCkJnJRhdwmfZAHf8dVHdrfgFpLWpBa",
  "key28": "5Zvrfi9ESmXPUizWRs1avh8Gr5n338JnAnwreRihhkFnS7WBF6CAPV94bG3WXBmaVq3p5ufXh8DaRyjXMEcrFo9Z",
  "key29": "3Yq4D9TGxGDhccf2sQ5fV97oPftkprx4HjK8DJbcTWZz4YotUVtwifzaTtGW6qo74UNbbqEr2iNzAEaZxwpYBuUD",
  "key30": "5vRWUNDN7VTovVkYBR4UUoPqTEeJRGEa7pkeGxmWyaC7jY4JSnSTvDpBajAMoxvNtNwPFfXcdBTTywQMNtYzD6xs",
  "key31": "gPEoxsjV7RSECAA6PdcTXemvzrJuBHQSsXAAA9cwjxu8EYdiKjQn1yCsM8vPtn4V3fKr4bZhW1jW4NNHvnKtCYR",
  "key32": "3N6Nd78viiAPSNnweD5uixaEQRhqjmz51ZDNTHRc16TFAFfXLAJvK61kRh6CocNKMbwY4nC6xSuLnGdsqb19EnEP",
  "key33": "2opuZJxAjnJqQ7BKEpH1WcHNLDzW3DdrweGBuH5s4hxHHJ1PtGexoRVJ1ezpBqafyepNqT65e1v6PRBFHkT6ZXRv",
  "key34": "2NREh9obEXYZxKHf3foUSoatobAJH4hm7VCdUfEvvnJQkdHewXmwC3fRPLQMbJyUBzzYfu11LMRh1jmvvQw35Wiy",
  "key35": "6ix8pFsVEXxaYhFLkKsKNFh6pnbyN2EszXRSoidwm9DoL73qv1L9UcfMvddLF9rRvDoZ6V5NEbUNS3i9BsgiZMu",
  "key36": "3PU664v7gqNb2CKCCzsmmgc3G4U79MsSMv2XrQ3pgmYrUuU9SgSc4iK8mDcXeiXo6EEZwr3YxdhgkqraSVvcAjNh",
  "key37": "5zxevx5Z5YST9QXDFQXBaFPHPCiKPS9meujfp4caiCAYWuUVuzkiqyAykVGm6QrntUhZGXgCYJgp5XM9aQc17XKx",
  "key38": "48xMmTSqmYGmBNdYKjbeyT4dcDH2rs6rD9hiWY96aHLnZ2Zz4CNjGKk7xNQUcxU45bukh2RPMayNuv3F3ZaFUNBv",
  "key39": "4LznYdtv83jQR2vH1ow3LAEo5aMzQM5FebUhH4iZdrMeHqWvLsnuMuZE2Ar8B3QKJc5GNjePbJCsTT42pJjqK9Tw",
  "key40": "Y5CWa76WZKbU5BoH6xWrXc8v3sdENRm5auaG1BeXox7MyZbfXQquvzJv8WNHQNgAzMquyR3WXitbAPprjVr2PMW"
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
