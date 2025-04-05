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
    "5tgTNU8ovvxEqyrYY34ywrBnVLGwb9RYYduzn3EDWiYQdhD5jFg2mRyh7jm1Rgqn5pbSnkCsVZuyzGwxNKSkXGej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AvZe566PJmbKKwz82HPWJbzLmgVqUapUgohEhW8U1AduMGUw5RsnPW5uutMHirZPETsoP2qTZ9UFh8K5KR9qCWg",
  "key1": "2vKrF4zjWN1mjCzNDQeieacw3DNYX5Hth6SYPVpbumxGVPCue7mAoHwd6ZnUoQUgt6KJRMKygntLifq2xUeCzjqL",
  "key2": "WQsbggpXNmpT3XkZaw82HZRYCQLWkAA5sPLQ4EGigMA3X82qjUabgxSTMqYMNfxWpEgF3trZPxQxGNvBnh74hgQ",
  "key3": "3K5VQzZn13vZa9tpkfNfRG54ukBF7vvnN8aA1ZY8DjvxQ66ogBGC5xiFcmjsU1uZQkx4eUaaX3Rc8LsYevbqnbxz",
  "key4": "2AiRYpXesWV5M3FF68Uo1Tdytkdy2U6TPBWk8hhKjqR2bFZjUHxup9nSRXuLyDLDaSC2wnVhsL3mTnFJFREKZebH",
  "key5": "2XWyWdKhUJgGHh1ZXqX4Wzh4bhJbMeBo74tEJNNPbDtkgHuWdpX6Mtj3bsmfMCQChtUQfwNvts2bydH5ADocxTYb",
  "key6": "3o1zzCLkE6XJGzB8S6Qw6f5hVVPfuMvVjwbhZhgDhcmC3wDQndETStDpreg8TPFnKXdc7m1WsfPrUmXt6X5aCjWF",
  "key7": "3q48zQwCaFViqdzAK5GkiH6wsrjGA2Pfifn63sGszQTVqnjT4QHArxC5vRTpcEPJQL42sjn5btAKwnPRANNowDTY",
  "key8": "4i4XrevuGe7McoLtsMiE5fYJwdV9VinhCaLUybCq1VdzsbcXxj8D1DvnU4fzt3EcFTgLNFnTFne3Urs5FZDsdpST",
  "key9": "2S1uXV7yiqNf7t2SturB2pZsNpUdVt3r2mFXGpr8aBuHX4P2oWaEz5hFhe9ietRvzFAEwF4ooRZsYBHc9in2Hkea",
  "key10": "3aTiNqPjXgZjZ6YJjH5AnexaLBjh94Kv72jVdvJTy4jmrdCwC6QMSTAUdCiri7m5SNFiVoWbdvG8u3XuscHaPBbA",
  "key11": "D5gxjdvCQ8JyK9k5EDN5NtgH8Hvw4ndDabYfF7Tv47px4XrSbGaby22i1Y5JUWDVPKgRHNaJG8eUAPV3PpkMrK6",
  "key12": "2vQtz1rn75RqutChERC4uYb4Bu3W898zgVexSmBMGkL7573B6bz3rSZua34d1YmE1VZwT52PoiNvFGGCB1nvv17k",
  "key13": "4PZ2cdFbu1ZUuKi4zZ3JmaqDoDuhnDeUCeDJUo98THSdtF7fCaF2NYdbMW4JaCXbwj3rxEPSPngLMHrGaD2oc9Ap",
  "key14": "4CGvB1sm7EUxe3RFQSkWeDouh8uohyCYWkAjKMkeF7f9A6YqNR6QKuFmRESf3sbag8RFgG1d7eB4ffmoq7AZmRri",
  "key15": "59WoJAzeHFhKFb8LWqbnpEPtbnRPaq3QQ1eAPzTxTdyqSSDs79Yxv1oBc7EPn2ruyNaJV2ucDwYpMHxG8fRdPj2v",
  "key16": "jzmVEqFXgEFcfiTFE4mmP1Q8TPDrPKvBprcRrTzXDQaTU9xotfPbPm7ZFJ2m7BdVXBo81ryHLbEdhS7nAXu5KBc",
  "key17": "GNqMvaVY5j3EK51KbGLPh9uKoEGNLmiMAPkrMECDDWQMifXgNLrSy1GksFFKKkLUTVEpNjsk9RpHjE2kKVB2uvd",
  "key18": "4zyFU72r7ENxqnUQHANTfuosjv6FF4TkDtK7UxXZHFQXWysovgGeNm3muwN63ZVLGKwFoAYr57jwB8bbT5w47nxP",
  "key19": "4mmXnyeui8PMJj3Ddf6kcyuWFi3hp3sTCngkW7DaPWQK78Vqa7p2dKF5UVFcHMJgfE9GQyBpz8jgzUNuWSnnorZg",
  "key20": "3DfeqjNqmwdCc6XNmrqs4Z94yAidWFHY1yEAKdad9P2p3EZb556Esoj6VWoBRZVMXuP1fvZJZj9rn3yjUpuSKKNS",
  "key21": "54W25aKbJaRLXaT4TmCdDPMKM5m9o16iKNDRJvWMXqu5qxcWa8WaT5rSKzaFkFyuuwBZKm7kKjnMXWY65AYmJF5Z",
  "key22": "2ApLbNV7jsQaRoPmNgMnFXdURXAuPUnB5DwbXygRn4eLjhYKR3CVobPXGto5ZayBBwaMhv14uqPbyR4nuDQ1ALvG",
  "key23": "4XzWtx7W8ujMunigLddhMkKKb85VSanMFxMmmRt6DkdcKWEbpZMTJSVdKXemMcLymg7H3uHCLdgBRezCPwLfvzyS",
  "key24": "5Tixbyqzb89jW1D1nV621p2o237cUAohLTs6PqQZQcbK29VoTDBW1z4a5o4a6LEyVjy9jvucooM6hBKTWbLmXKSt",
  "key25": "2GC5R9ZaNz2eUBqj9XHajPV7YMsNhYATbb78qpACbCDM9gesQqBWP8y4ZwtRpFEjCL5N33gXpFtTZbSr33Y9AHNU",
  "key26": "3m1YfRsAhZmADhpLPi9y12HQiDzbWLSJBScPvVHZY1n5rcswwCLztYm59rHZkQa4BZ661SahFnKig6DdfmWtv4TX",
  "key27": "5GMwR5TqtMztSTwJ5c3ww46PQvenwAkEKJrHn9AQGMtCnDaxLXBcxpgLALFjwAuCyjBA6tn7ukgpUq9yUySvCPJf",
  "key28": "3c48XUEfXtnVzVJkZb3uAfzhQ78TkRZetEp2oBZY5ZJDX9TK2iNzvCTuDWw12J4JctfJZAFG7SdTQeCoyivHFudD",
  "key29": "29r3ujDHS9uo8qgDckDaE5Qd5sZC3x3q7XGoz8ofeL1g7HvPMJZMHSKdpgBfcbF9TFYjLx2u3XBkKFpKEFuQvHAH",
  "key30": "5bkxSnq4rpYYWL8xn6xxqrTeg9a1CgUTtN6goNvhNSHKtfgNGNE3Ms86E2cvZhAqSniuQw5w4whEUiHvGfJitsfE",
  "key31": "2GpCy3y3QvNvW5JZQMV7XcJh7xAu629orUHy3sdrNgEsoWrZwacrPBkAoc1yhwMryo5DGYB72iSB89bYhee58kE3",
  "key32": "3asnXvWiSS5zCHZv8nuK11oFyzu2fWzsfhJnvz877kM3uegzDjncwwirDmgq78KtPsXrgtZF5gKjvXSMK8hXbYkm",
  "key33": "igzifgaWiAtgrHUUPi99MYmf6jza7njz1hXJpzBhz6ayZsiL8HVv9ggiDnttevPs1V6Eija2SK5oKrYfXKwbct9",
  "key34": "4n5qMa5itgWdsghm3UoShbrr1Mo7V3u5rbYPHW4SXqKa5CX4inCUmiqGKHk13XwdYca7RYaWWUBrT6CTZ5Ym46p8",
  "key35": "5pqAbRVhHBrrB87fosCGekDvsXtMNgKhTMzPqFMX3ycP7D2xRLpbdX6YtDhj9jBDUsCowzeQotYayvt3L8892Hqq"
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
