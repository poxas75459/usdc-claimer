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
    "3iyjBzwP4eBwuGtfBg1L58ZHRn8avYtCnT8UsaxemeHyRMrXHUxQWL6sweUgjV8781RYdGEJ2RH2PcBfd3KJLLVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MW3WNo9fS53Az8tdrEYFT3sBjAETV4EAUqw9keGF4snHEgLrjKtWspQx2gozPCBTHaKyr1FWK3umkZxXcsQWAoM",
  "key1": "58HoeW9dEpV5zzNN872zp5xqXYU3ZkixGYQ8RiQAi4i9AgvizniBAkW3hbgS3GJX2TiC87gQ8EaNFiqAqGmWWsuf",
  "key2": "4ArfVBexvNzFnRkYvMesaHbTuofGudSKSWC4yw56QG8yAHg98zCs2poAAwNsu6KsuLh66kzMWjjWCUtzgshJK9mF",
  "key3": "2kbftXRgjNDW8tp1CZy1YtzG9hmJcMXTf62PbyAp6Qv77rPZhTkzmLYBFaUv3xosUusbCUw4guBrxQD4uA9PVuC7",
  "key4": "49WbZao5zYejZ2PvhGV8Vmj8CRNtXhfCBAV4zpxFx9xxTQzN3vnrtaBSewDM9r3DevUNUAArPow7FjYhd6UA7dYF",
  "key5": "3oRSB8pZJKRE8jeUhLQDySjGEXKEoq6SSrds1hepAifwUGYU2TEk8HMzaycNFp96Y35s6CfoCRVk137h7i5nKRds",
  "key6": "FopQHidJHbRFVPx27cuJP16ynbunLSfrNbAgJvnkWHJzzwLRWrodtrVxQerwDynjBKVWzoXHazzo7a4QCHhiFZM",
  "key7": "SsVHzqsGvDc8tvTGaJHyho2trVESnV1QQs5h2MW2FGbfYpF84XnCK72AhadrADyW3qTWHWFUpFsMXJzXjkhDoYR",
  "key8": "4ykAJgVzdZQ4B1r2honH6gBAo5SmRTmZmZwok4ucdG833dxtcHzSRFggDJA1Km7SL8VB2FSzyswTctwncDZW8WLn",
  "key9": "8NUXj4oz8EP1FSx2X9arono4HDosqn5nTttAq73Gxr4FoNhhwgCwQLyXp4drChYEUCz4wUk6zSLViziAkUqUXNi",
  "key10": "nTERB8K62c3DESsAc5oe2vGWTHyrRxp5mkG36mxa1L3S7YV72EpH6uivwTe9Uwc84GDzE6ehUcSJJo9aMeEp2ME",
  "key11": "4kngo2k8ZYcnyx9vCCtxTDA2KiLFxASNuxaTQKbPC3H79FpADGwNsCLHEGc8vykuMT4aNixYxZkgj4kGYNhAwtMx",
  "key12": "2zefjbM78NNkRnYeyzNAzmUGNWzVRaQ46h8oUME4CK2KQtkZefBT3VqVTVcCGWt5GZAgZACSFPzb6nzuzpAFkyPq",
  "key13": "tP3QdDSq6wkJCTNtdALdQuBsWrsK3WNQBC5avU9KN4M5NPCQny9Q5MHZqLW6pT1XbcRB73bXG9q4dzWHgc2adqt",
  "key14": "67SL7dv5rw7bcfsD2DS45fr53ZEQinKKT8m6FfsLN2Nd29ZcPPRZ1ZV8KfZKHJsL2DW9kghueGgp6FsNgDXqPVfV",
  "key15": "5C3BtbEQwrR3prHxNkxzZz9E6mTQxsGH7p7ZWUBPPMsNkdWuKUCHhpp7Cp6WyzPuzWDd1rtTgo2TzDADzAsTuekr",
  "key16": "4C3X3i8nbReexbwGueuhYVv4tkn6YZm6tnbQnXCJYntj8wxcdJ1RAEohuSPce9kHUaPrZRNh4bXvhNBdoBkFnaTh",
  "key17": "3skYPK1ykpozvvGzq1km71BKad9iM92TrVnc4X96dwQmuXD5bcfYSxVW8zQtJ23aZembW9SvEeHq7VFG8FromBoT",
  "key18": "5nQEjypNQeuTcmKtpVhrCb5se54Ncr3okg8gS1Ep2TrhUjPeo5BvYNemahxYDoBBj2SLDa3tGwwnPDUuxBswmYgw",
  "key19": "3F7deZAH6in7Gx4xSkfNoRRRdMmHdPeF6VZRsjQA69KZZGe38NqY4oqKFYuZ7KcZrQdxABDjzszKhLaifb7AjWDG",
  "key20": "dfVkjRohmVZWx2fDVLwqK5Dgo8QTKYkjqYr2cM8EXzSzn9DB71zqCBAob46bW5CvtUQWVMtAE9PpxL46UouAkgg",
  "key21": "4y7zpRbFzNMHAp8QMmkGtXrgRU8rTZoHUcSjdHZGAutJgoHe6KxAuWg9dkQcJv3K9GHqGcNFXCUiaakGg3Urf1UY",
  "key22": "4Ws8sqxomk5iPFBcKthGhmKFWpLe3Bk7XoBqnpQ5D73FAZ727xvonQi1ionfq1RiBxHuSf3GHXeWzJGNtrFVNjUx",
  "key23": "jvpLPZFj8B7vYJtC8tMEWwRJgvAXZxbZJRWu26PG3UkUbuCp632zB8JpYMKHo1X1u1PWwJbncfKP7MqkJYcfCig",
  "key24": "4o2GEjzPav5pFL882XMTfUKxKgycnh9wk3BgTfKf2uaaG3U3jnEgzdBtXDqMPcfcHMtooaxXa3Y7mm2uifDZZHdM",
  "key25": "G2ugDrRSm4fmhkzyMZwgboDqqWijGh83BAU48Tj13KwRhEfoX3rnNBxpeVQ45M5Xw6JLHuY4rt1imm9D3rswQq3",
  "key26": "3NE8dWPXjuDTwfVAAj8zSYKo275dG7rpkpvtcJLP1nEQ8DsCd2ZpcbJjnQN7zeFTkcQs33Eo1KspTE3ZCTWbVf4s",
  "key27": "2NrdtDq6nV7NiHPzf1MKfs5EsJsoEGiREU8hRsdPbbkv7FgZ63tWpn5WeoCh58kJHz5qxrtLVyoAwDqPrxeAp5Z2",
  "key28": "3p38ABHFVxJ3jiSN3FKJhYy2kfuc83YsjuWjdWT3b4CNakVQjzFw1X6FXXEbBcz7XaQii57ejy3bDMGipF3RsHsZ",
  "key29": "4QymNSsQ5opZbLLk36xFxzZWXQLkF2xmmccQtc4aiQsaDpdeouTpkRxxub173LBCXLWqUynbKb2LJk3eFRdgj97p",
  "key30": "4Djsu2SkHVo8z5TsGGJwENRSfTdWaRawL5sgfzTjMoGL6ZTKYbnj5JFqw3Bw87q6ks2NfLhL8cy51cbrvAnTaf4c",
  "key31": "59nfTpEpF7gTcEANXbgvbsDtPTUWGqb91q1rmgLu4sZbB5t1wqqzEBUihoanxRGV3rZFtRk2YLVJ33sf8uzS1SLT",
  "key32": "5MpivJxiaT4fjzC2rmn6Txv3yPnzsDYaNPn1AGpqmWvbhF3kQNh3BYYYAx4eBDmgV4GLz6qBtjzx7M2JvFnMNqry",
  "key33": "fKWm1GVnJD9wZHGzJ2UUsda5272QBPptUNp8LvQoaZys4GyeAtHNXPx3ienWCqA2zqpz6B5qjekKKc5owjHkjBc",
  "key34": "pkotkr64ykzwG3mAh1iqh6DvBP7AZztfvs2SRZkY8ndemNoEd1RPnBjUvtG2cWqQ9TjAqvRjVT9398oeYpuUHYN",
  "key35": "5Ha3jeFZDwBcg2mMHD5RaMxVoNBQ9ndbX5DgXTCC1aTsW1EY8EEEAMtTbcZW7EcZBg3e3pshFjsM3k8g8AveBm6D",
  "key36": "5QjhRyz2xhnMVsrHamXxGqyDjNuHn9FQbrXbZVdjZCD2mTHdvacUfPz4xNjqwxBvKjBykH5ahuHFG2BEXkh3VRBb",
  "key37": "yJMBqTDCjUbQ7k944qUa4YYcuE39HpKQNqfRvakQyqNGc1UiApns8TwEFNYxxq597eQSHURB2eZs5JYecavzQ1m",
  "key38": "48sbP1PSTiCaHYaMVnfJxVD2p8BFM49P5TCPxWtJJgaHwSaq956Cfs2EbtoTzRvEtZFG81LSgm6tdZn5pdX3FVJf",
  "key39": "4SVz9LR4JighvP3xg6KAqtQ91wfFPFXsi3LtvuC5cHG2r3vzxiQF2dS1ShCPwZcwLoD9n9Gf8H9KoRUmmGZyzCNS",
  "key40": "3jHC6dq3vLhT3WMswGG4Rw3sNzakyuZ7z8ATmArjV9CQUe33Fdq8FjYwV8gVLuZav2NZsGhhNFx6TeJrkPa6gF6c",
  "key41": "5dfuXob8gtPMPTTaCat5CB9TxFECAaigJb9Ge3cmNM8i1M5FuGae5ioWPqRsShKH3vZ7SvDPpkCPYhYyXhuS2Umi",
  "key42": "2ZbhrBwVcoVKYjibRxt596UwXjkitDih4CyNfPvboXCkuBZgcHH719rZaf5zZDsnMLWu7sZSFTmkf5rjM52fTgWo",
  "key43": "48svFRvGg4Uv3pwXQwMPU2pvXCpDW5XzcjFczi4yiqKCUXumWPwz3E7QT2gwVWmX33z2UMG9W96LuH4snhGSr5t7",
  "key44": "2wdD8KnNE2J14yMvZkcLXxQ1RLvuuoiYaMyAngwkMtn9kmVpbaz5Hd5cbAz2smGrMDxb43Rd1VEsvWsqnAetTwgd",
  "key45": "53VWTTEfBCshD4TubAQnRyUoioqrarY7puihixFyMpjnB1XRTjx2M8aH1t2GJ8hZkVp6JgXGjitxowWMp5676SNp",
  "key46": "5EjMb2DEPBVkpoRpui3oqgY8yyHBK3uk1fBJXyprVNe78XUzefhxkixj7oZfbigHv44XsdgCTNToPrQHDxVfJK7h",
  "key47": "u8Se6VfnPtABnZkfGvPotkqu9CEfc84UoSCcq4PniwAGX2UJsKndsKGLmprccUX2dLHiNCu8VYHqH8hYJhBSCHt"
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
