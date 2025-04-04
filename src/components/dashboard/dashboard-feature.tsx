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
    "3hhDM8VsDTMqW5zSR6jEfY1vqGZDMyE8etL1tfyRUCAZqLar4JmYBuHGfRX8RESt6qQ1xmEjhCdtnMm5643D4sN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sx4LgSUam1WVJkYBNFHaHKy21Qiy87gPLZ4FbgKMdhwkXGX2RuZbWbtTqCf2srQmMkdPJGhnwXcatndqjHUTmpU",
  "key1": "uSbwd8pcDKCjakYnMdnse1uwWbjZ8Vc3KDSvJ4QeLZPqSho4KxVmpKG1mLZDb4CZT23ZnKuJu2HDJedSev44HB2",
  "key2": "518CdZpeWfNxbvF1XbAxx4hcPTXBrnWWKuW2A9snFFsMwfSAAVUZnVoCgKYc2wqg2BfftGsgH5RJacuDd1RyFcU9",
  "key3": "3RMbTY2EDQRrtBTRbujjW9MM6w7PaHDwaKMS3bySCT4cJWrd46yz1hixfS5D5UeYE76PhqNc2xTUkF2RJfev2ZUM",
  "key4": "5QvM5FgqDC5xjUqUHpYomTWwNiEL6S4AG5sESMrsaw95vVuDkYa1spXJFkj6LxLfs4GsM8cMAWVyuEu6anz77ZvS",
  "key5": "3nWNKm5gcrLu2nd6zP2dhr6oTVfkoUQwqHv8oJEPy2ExZpUvaFkNYFhEmghanK3q2xHfrKxBwVoPH98Ke6v5JuEN",
  "key6": "5qUFwfodosDjj5Bng2qeq3PoRStSsvdK8xgrKeBGHpArJEbtPxp5EwcCZPNV8NTn3kiPbGBNzu7zLvL5dPDgCmzV",
  "key7": "26pqk4CxEmoAXxjUhYNkWMxwgAxKS2WNpT8FB2pezEKuS9ymkHXyDeeJ3ferSACWAnaZMBuHebMdxRzudjohgmgu",
  "key8": "5XnxMhvErx3diGe9YQfotRbj44sU7absRndvz6VsB7DNGLqMTVxCDA2viCYmp4HApqbWw3mvqsfm8yq3dBoeRD4t",
  "key9": "61sPVMGBkMhBECPoN1UzYKrGCbLsuqXnMqcNtnhLSrfRD6BWFTzuFzex3qifHoPaydSgLwMZ3oMMiUdE5aFmD1KU",
  "key10": "4sjjqqaCUgSnKqM9WHSqZQ13SunEfmzxPaPSn7fL4FLbetHhWpbHhkdjRoNt7FWrzQWp5tXQeZPC1YmoWJ1NppBN",
  "key11": "2tJNepVqUxcYKjFAdQg8mAuC464QZgLX3fw1XxzNEymy8QEc6wnEh9iKBUvKWESERZvaL2PpNDHAeTt22J4ataYx",
  "key12": "CoznmJ2qNDWa7AqErwJhD817vQERgnwGNiCnK1i3AfkUakQbduawZnQ3uCgCfcjUWUDPNrXERPn2EtHV8K7Spar",
  "key13": "5sAi5FXcbnixMpqNwF3YbJrjpbiDuHTPXmZjdhyahMnTsxtrxEMreeNwyRMBZEeYyC8fRR1WRkGiHEBKDxfGViFw",
  "key14": "5D6rB7CTviFVaUE25kLkM9R6sJ9LTGwj2pNCL5foi67SPdxsWEjmhDcKDLg4LpPSfx149wXW9xdBeU2Gpvc9Vfeh",
  "key15": "5uRAq6UZAYSXVsmx2Yvieb3JyfusnbWuuDiLCeiR6gbKr9HJQJwz6FvaQfjrn3Jw9qHQtmC4bHoTpfAaBsFUzmKV",
  "key16": "3bGcFfas7hSZXUaVLiWwdPaXiBHSi8jDjQv5vo53JN2WXxsD7Hf2hKeByVV6bomBSATkWMFtSWVgHXRGSja9VfeT",
  "key17": "MHpvo1LZeGdJs2BtPBHXeByUEUJkGwTQ9ekpPXHbLRNknb5UbK2NmVMBabxPE77cThW8i8LJ7Q5GxALP5YTryt2",
  "key18": "2kfvNuffirtSYZ99Kwr1MqVsaES2UL7oc4PDXb1QXWLg3XxZfpKStEP4aaVUiW4B19QnKmdrGcm9mzdrK4bKuFhY",
  "key19": "51AFHWuf9Fxe7wmcfTbkVB34iEvKiNxPoujTJa1TBNtqCE3ZxC2sRw3ZS6xvcJAyHHN28EdG2fhUNayEE4xsSwqM",
  "key20": "KhvGpJo4p85sWucjzCGcydALWzFhWu4wnRgm3p6r7fgqUt9rqgRKhJLLKSPbv1WKs5ooqZ1CRjbCc2f2eUPEwZb",
  "key21": "NVNyjugFK6y9hpbEmnGSiMq3foGVy62WNC6vL3tJZeHVKS4qH2MFvuHoZGCgL4DDnkWKFAN8wAnybjFWD3c6dSL",
  "key22": "5CAxC14oHX4GsupsuVBFbP3sEECAT4qN3dgdcLyLUjePPZaP3C5LhNVsKCYo6eowDqQd9x3ta3XN1w1MZStNdXiq",
  "key23": "4nfgHC45fLRigJ1fqyzx2PCyUxzXrm7epfK5LmSSi8rrhjLa6Riiv4Xkpv2wGYPcDC1p7Q7KNnTpVVUgGfkmKN9t",
  "key24": "4Tihy3aCqbsHQrJCu9xN1n9tFJxoENUh84ccg2F2QW71HMDHUQeZmWcc71weF8mfNUKqpzSGARgqjBoKp6E9EhPW",
  "key25": "3SK4mDJj7uMWmnLwf2mRdMmX1x1C9aWRj1EpVEYvmrNRdWiUUYieyysGKsNkprwhRHNHKA4kt3WfujjSKng3BUFG",
  "key26": "VRdgVBi9ofSkHHKFLedVze3yzZ2gG7fJQWsmob2DcGygFWep1LNFyXcgisVTx9WdwUX55bXqaNZt2eLMHGgPbX8",
  "key27": "3ANw1XiwGT5zuZJt2G2h3Pka5WPkADw5t1QiNsJUKH4i7wkV9VsuLDGsXTHVyV9W5W9ywAghtHMt13Nq8cJiLUGD",
  "key28": "4M81p7xjxGogbj1Uyo9DQSKQE2U8fAMGCTEmjdJ9DrtAxYZUgPUC9SYtWdbn7QchGYvnEcLFiTqHCF4rK1sWsz4D",
  "key29": "yHtjzCDtFovXMBptr4TdkUSjTp61GiFjSLKzEkk54fjXdSMysTPABFcqx3YagwGaNaTwT6MQ5t4fsMu7Cozx3QH",
  "key30": "5QK85Jrxrp8ApLGRNbrbkzPBhrgWz9NoDQQJveq7a3DNt8ctoFKvzSWJ2gftbKRBKAN8LRSEcDB6f9xM8jDEUGLG",
  "key31": "4zpkD8riyYNarFRSoFTKaDWqGsanJvdyuj1rhFhjEBSdw6bwaYUXmxpvxZojeRUTFgqr3RCZo48ASTtXSVvvAkjT",
  "key32": "5G7swcECNZJK8ydGMuFr1w6VGi9VNAF5hQiGbGyCAoK9wEaUrb97qtUMdxMNSCApXLkDu1EiQ6k5oz2XZpcbCChA",
  "key33": "5EHQdUV4hjL4eLhyBRzaDiYXp6EVk9QXKjbQZwYFiDzCuJArz3AXqA6SFhCygVcmqaHuFEKwSki9JT7nEvdupufW",
  "key34": "pw4cmEdUKJjECrjpioezGBuSRM8WTtKqMKcFU4VDxpDH6UWqc3h6PWQsjVWP6Npo2A4WsCtcPLR89uA9HaZHHDK",
  "key35": "2YzYruVvX2DapsjfvrS7QgKHhm7fnMyAkkr4CHTNxKX48xtqN5B8T2qbTYRJCWv5KyvhCTh5NNyhKx8J9ZmqRpYk",
  "key36": "4D75kWhkK821RsbeHehbCTEk6XSbLMcAiYjmHsWyoB5N1Nv9c4CaR2B6vtg24Q2EPsWE8EWhwhENv91CBCweo47e",
  "key37": "BvsubsajUbY5pxDXZQYEWzEX7qac3ok4WF4De8BNv6Hn28fkwGU59TYSzuM3vJ83v8r6xK87h3aPGFEGF977bV2",
  "key38": "516tBU6cqurNMxARYhH7Efq5feozm7vFtNfa4u54EP6xzfHfsq8dNo65Qebr51yjYYH495TLF4VzBWBEChPsFR2p",
  "key39": "2RQZdrJWLPCH1SYLTn49HCBZYTMMpeiqCgfidQywnUG4MjfTpXePjkSvtak6qK4HckmgnimzupgYUVu4gs6cUiZ9",
  "key40": "3J7gHfSKWiv1tRPmVSczzrLc8F9cytMWWkpzAgrKBQFTBvcmHCeUG4huR65edZBoCxUrem3HsuEFdRkKMveAyWkh",
  "key41": "tefgSgKHVP8uhvHpkoycYKP1xs747PJTq4fCppZ9N53zrcgHtf4oaQCfuZWgBhcvHz2i2imxPBcVydcme3DPZUe",
  "key42": "3NH59DRakbjU2y1udukryo1yq2dfAnSEPt6JnNjkvStT6gxG5Yz2621CNxf9spBf99Tgxpo4CPMh7dSLUruk9oZG",
  "key43": "3yAfPynuLs8jjyrJy82gBCnBbN78aYSkQy4eqpQFRf8qta1bM5a3TUkdkr6E8H7VjUX6tx9xczLt29kmfzf5dd4b",
  "key44": "3Mrap5FXAkaDJHyrXiSRYZQmFXg1WKZjKjmMHhF63rqPXYortsVGYCEyf6BTLk6NaPZsSTqGdvg3484j98uh13rZ",
  "key45": "3SrPuG2ANpQpzpeA9TddeTZTHxYhkD5AUP9niaKXKAxm5PjSaUwF9S4wLWr4auCnhNJUPbui5ctbSHkhM5TWrWT7",
  "key46": "xzaSLg9cLeQhGrUGqbCHxqjrDcWQWRk9x3o3LjuhaZ72PdCm9wHCgZzQs9Qykip8dqEtvgS1EKfs4Dy8hYqxGP5"
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
