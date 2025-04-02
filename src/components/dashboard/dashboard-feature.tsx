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
    "SfeDV4WUWNWdnkXA6NEzPUCkFNm9vnFmL9GWwogCiDwTK1n1FsB41YSAowQj7koVzouoFyBAQgZ2sAEeSgJDrzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476ZmPJbQeHF9EcBrc339PeUvNajt8tdX8aHGonh2jykR7VtGUVYHwpvtBgzZSeZb2JwUYcq58Px6A8iBuAwhXrb",
  "key1": "3qtck8onVy2HbmfbjL1axBwDeQXGvoGZ8UvNpFP8G2wdCV2t4XBomYrm7YYM8g6sgxpR6a8jJpa5s6xm9Eqyso1E",
  "key2": "5mhYeLUfmKMvGed9qbsR4zBvYy8VSVo51Kj7uTdrpuuqxsuLBn7rSjfa7oQro5Fp9PB8KvGF6Nk7CRVTsRuhcU2L",
  "key3": "fiC6aBGmAXX926ofrBwjGaXDeTubLTf36eEJhkS2QPmcMxL9QNtiKK6kMoKVSn29aQgGt1FzXn9Ly6MxrEKMrbJ",
  "key4": "5hMjCKHgaAtVtdXvBhBmqg3bwJZ8krEGHSe6QUEP9Va4FogfVdBYmMkeCsFgHUmj8g9WGKUFU38Nd1jqAvt3za1w",
  "key5": "2KtFSKFgGk9qEmKSNeqoAS6dPD5f2BDY6ebFxGnuaEgc668HYk67vBaNd6e3LoeNxxpdMEjdnN3Qwhv92bPXybu4",
  "key6": "5ykZdPM8nrukd4uLjsuzvsCWzLFycLrsztwPsXXUMGrDGqsxPZzL4qVTjGvgqjyKJSRbJoTdzgNdQSoTg43tjMjq",
  "key7": "4UtnWqb8YrzWWdyPwbKYPoR5j73ujKG2guF6zGMCURiS9YgkAFpM3jM38vYpWkd4bVFYhoth8ZwsXhSDNwgXqpSr",
  "key8": "3e5U8xtLLxyZMhR8aVENF9HHEuMJXDpD3hSV5vKqsd1zsLAjt43FsdNSfypYTfcfEDMNVsGwYgKSQqzo5DCJg9nB",
  "key9": "43oXigDPdLAoUWf4SroHdavqqFBt2X5jUqSfwoejt2bzbikHizMvEzWSaz5FKBXgLasZspHhs9uqiDxGoeJNXk5n",
  "key10": "46TxwuPpj3eJshv1Hpuej8HAq1npjNxDzDge2TTJhNzY36t88L2G7Av1xZb8vDyu4FKSdbwFsmrCnnELVCDVn9bf",
  "key11": "4uJ2goQZ4iqAWQcNK9CEFnXMddsJ4awVnaxHubPsLGtHJU3G4DoPokP3WZ1PdzEAFxcKGQWkNA6VwvCdL2p7EERc",
  "key12": "5YqMMNk3BznFStLC58ZhqSjTq4syLaXaNgPwY2tqRfLmeZ6tbE3Fxr9hzQFCJ7yFJFEgCjtFGwzc2gxn3eQsKeuV",
  "key13": "5Q2AQKXfibD27wYGVMVGARsnsw2iBgZd1NRv3pYhVZsDC5BSxykuasymjwsPx9ZaL5Eh2r5SZ538XjwsZBaD2avr",
  "key14": "4LwYBiWDAR7a5r5htPsE5pCQzE92mxzW76eLdx6dU2MTek275poyrciBi7KXCeEGUgmy5YBYWUE6Rqhg36JJ4yTa",
  "key15": "5KCm2dP6G6saAz88NviH3P4HdK9oXw1b9CNVcGYJMMB4ShALbU8GNHoEoZUa1aoUsRw6UTKAY2U9jeE3hWHtsatB",
  "key16": "jG4sCm8Q8LF8AFuDun8qmw521zuK3BL4AKnMBFZ27E4C84PVx1n3JU7fHK3JmowGQ2G227z8JR816spgEJWYQ5j",
  "key17": "xH7RivJSRdbr14ndVStfZNRKrh86VAfVds3YpW3xje49oVzeSGgLQGuoXRd3DvfoKaWH6B7ZmC4LghCApZg4gjQ",
  "key18": "5pprzLDwzD1r52AoZcyAjWUJvqcamWTaP8Qv1yUsE6gwGSpJ6CRHMXkGhNDxezVei2mj4HjBFaEMpMeGbwLpn1FW",
  "key19": "3WicapXRij8xfn4S5ap5iAbvsVFCkNVKV66MYEDt9MSwCaJprfv6EhPe32bWpCQKaSKbk45auzYL3wwnqzLGqWU9",
  "key20": "5Sq6w5Rbqk1GVb4GZw98ZnEinfXpURdQXhN3RuW5EaWC3xyMQqdfnQmGT8gTnYpZ5xwUXyqXMaB5Sg2Jm8JDVxhS",
  "key21": "3DNP8LPg7moCNRostCTkoy8xoV9Zrd8QXoKtcTvPGQbYNGgvPGBRJVFzRwqM4uv4BS4BLBvzm8UkTYZ9CLdnMhPq",
  "key22": "3vLMHLpCyuMiFoMwHrtrsmkLUrLXt4UrWNFTC1LnDGgUDTZBp2qN35KCbgbEvMB1tonYVKwdNkAYafoc5EfCFPZ9",
  "key23": "5JBvmJbBwo9uZenaTz67uKnt95sLYf6rMifNJCmN2bzP4DhDS2Ri6C6x9DKFvBjBzMppmkHoFCxwgXzWmGrUv4VN",
  "key24": "5azdbREex4sw5fmNkreSrE72t9p3aTHWhXcvqhnLcpW7Xiwv454noDnAYDqMcjYmtDWevdCzUcdWPSBTCZjiRkAY",
  "key25": "5QKrmpEQGo6B9QbgUKrDPHYT6zFPTpSkcaFYVG3X1KdQvWimQAMLPKtxwMBesfh7fMR5k9gTsaTuEV88LFe87u5G",
  "key26": "3c3gpDzSoFpkzsWMcn5EN4ceqSkXVZ9HxZiE8dcRjDXgmEYAwyJb5Ky8ErbCtVgG1fKdBq7FSdLC2kaY6T1BiNRs"
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
