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
    "5Uci6QHH3pSdknSaxr84KBqNrCwD5eJtXZpG5ASjL1rGaPifRi5riThUkkyg5Wwb4oHnTKXQHf8r5A2yiFuhFTiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xkq1FsR4gSRRno6bMCxgGh53hkybXwb53VZrD7giDZPqstbdScxxJKEbJneik8svDeKCHc4PkdeStXzJ2eFKLug",
  "key1": "4yNwdYnKkKfMunukwNTxoSWYZyDQ7xxDwpfedu5v1HmzW4VyEcHfMCiJLvTpWVEF1hh3j2hA353bMwK1goco9vRr",
  "key2": "8hpWtHuTXzufvfvwRB9TbcJLFRe45PbBVYW41xf4UimSoFjxjxftwRN5QQzSUNbchEmnPG9dYFiXFoKsRhmpBWk",
  "key3": "3dYkwpmHnHa7HvYtTeP7JKxorsaBQbBuRJ54MiBauvNNp4rgtBcaJtwFWdN7a5GHGW6UBAvYsA89r6LskUY4XzEq",
  "key4": "5RYqeNcHSGg6g3cCgaXQwpeqSS8MyQur3s4hJBbsWjDfWV4hGLXvuRN8Dp7TQ5TUWjqzgXRUazhXgjwjcAQfCJUr",
  "key5": "2xtWNpRKCnQSgV21WNCfHJbhKy1BVhUVBf7tfzkW1EsMTR1gU8TVkbHoYpTdid98pqXancpM7ThpEbYheoroTvyE",
  "key6": "53B28WY3cdXrBTWX6efHhPPedVPPTBpYz8yBGk6fXyXkZLQyepu18EsvsPR1doQrn5qgWzykfo284NcLMmNa3ZQx",
  "key7": "nZFLAjEmibe9E4Tzk3RrfU9gmRHw9CrDQaYHiGpthrffqE9iERRnVmqfu1J5WTv5szspiSKYAz8TKbsDxgphnvJ",
  "key8": "2BfyHC1VmRDQBXLxDnhm2uZjpjKxgfW5o4vXGZFphXc5AGKzs6fiojpMCWPi499f4VxR2NtVJxQ54KaZsBriwvsa",
  "key9": "2tiAtsw18BwRZrXoMvd3eD5JpfH1DDCGyJ5a2NRRSPAXPkMjL7xsdayQi1LEsbLAnUeNAbdzHF4NZDzCmQLcHJs5",
  "key10": "2Npnev5uUe3kugcVPfALHUvykTXrfo52KUGDQTrCiLnTPwDna8CPqEeBqrtSaga9tjWor9Bym4tJ7AvrqeBjn6KT",
  "key11": "4EzeUCExshz2S7RJc1jkJmQP2TdtXD32ueyGnVZnmakmBBaMsEymjgAHwK5T1gkDdyMiyDTRZ2pGNWGtNn3r4nEp",
  "key12": "MSgzfVEoXXGXb7thZnNr9vcGbFcX1ypUnTk1cBTJWfWd2fsBrDCPNdFXHTAUncPtn9tUP54NcH5dHUKjdpJy4CJ",
  "key13": "34DdNNaikWPSa9Pjr6zpsdzq7g8NiscLGfWNyndCXiEmWVzzSZWK9KwXndB1suDrkURhAj9SDe5NTVgLkhPveBR2",
  "key14": "5P7s2uPfjotstCMgEQYBEzjMa2ftCfR6DZdWGSDeakv8gsvTDFnJc8oBboRCBSfkxLKmPdvwiDnD6ZJVtDk5xiXs",
  "key15": "67TjrEPYa4VLS1vKVUcgSamVRoSTP7kiHLfW1PPBRYnc5v59dGtFFsJh7F8V26FJQpXWbL3Jq5Mj5Dsh8JjATK6m",
  "key16": "33e3LrSdc8TJuaGWYQMe6UZPg1qmCWLsdj3pdZ6UdG5RBhBPzkZUpCLwPiHdUMAksbxYFSfsxSTH7LZfCiacsGk",
  "key17": "3XdFkuYtHZ5SizxHTn4UevYtRLKz5TYYUpqcnmqDUoL7QnwcPMD9e6wx84mRvySgNJjfqYN9QoAf1UyfAyWj8dnw",
  "key18": "AQFzL2Rn6Bu3wfQtkW8iVWnUVffE5b4pdqryeqKFDpCQrrv8E4MNAWpqE7sCkheFzRYcxheuzs2vwGm6sixhJZw",
  "key19": "4B5hjHWxRsMKwf15ecGqZdepww1iBYSzZNM8k3FEUngjVDACUzMT9nj3hLqjW3ih91sWS4qrTuXadS9tgkijCDoc",
  "key20": "NbZkGA1G9uqe5jX8U6Jk1Ght27KZH6AezYdUiDiexqBJbKRtGTxeh8u4UutLND4cuFPPv5u9TLM55wzUSCPtQGE",
  "key21": "5e3JRjhT3K7btBdSZutGRcmhRjgWd9KKSUM7MhoHkj6zYcRhYLCYNsHz2JhyJFA89ctgwrirJKLqgh4JHhAYdqbp",
  "key22": "2Q3YdFsFopFVWh75LrSNNuKk5rqwsMonMLfDeXn5KJycRtp5CjMs1ZMhbMXxUR1U8gN18Vx5YBeHPyVzUrdwaCbf",
  "key23": "4e4nX4W1k4gjUCVCfjRbXoG3QNYQ7FEyUToST4tJi7Ga8HMV8TTKoFR45Y7jNiF6uXBZvG9gUZq8MhA7Fu2bcztW",
  "key24": "5yutkuo56PjEh1ygp9wZfg8rWnxitPGqMASPFb3FhF2ABV7pnobjdGEaeeonnPF1ormpKxtuqrfKSjCsuZZJH5hv",
  "key25": "2oUwN1vtDZgzbw2nmHo11U22QJwgmZ9BtfAQzzwzat21qxgycTnMxYS8jRzGbvKFdZWYwgdqXB78LdUT5FPCBGzc",
  "key26": "4fJSdB1h26s5U7t4EfdUt3dmChu43Ynep7sjVEFE7JAkALLPcmiKTt8eymkuGSs6SMLWbdEPfdcnNp3EFXyktovM",
  "key27": "2CwyygM6xxxLYvAJbxHvWqYcR7GRraJhE948gFNoAbbvVB1Y8PGiXjEGQyNiMoNKpDqU8Cii1grTiQuuEXEwAj6J",
  "key28": "43qGUywcH2FAsDiKnEn3CUpUuzW4BvFFN29b73QJneg3DXT9KqQa2LzxKQ1iAcBFv9RKGEJFx7XKToGqP6Koka6w",
  "key29": "2M9RR1gcyabSf5RkqXGRoxhVkE4Hf2cFD9LTix7Cwx5u4kjF4WBGPbSMUWqEshUqzoKDzGGLa99yUcKGxwdWYLwB",
  "key30": "2x9D1bSidBJuD4y5WQHbE2LKKTuHfKvJVPiusNs3ng9zqVxZYciwqqDsVGE2nwMmR2hYv4AVpDWdApABXPeBvba9",
  "key31": "5appmyk2MEwsA6BERKjyxuZ5D8F63YdzCwmdgBCTaNyy6pvzQa6v5usT79aTXazbswPQe6GtwiNaXDosyGQFQGqr",
  "key32": "3DZTwiL5gXqRd62VhP4MmiJECZTg7cJLhBwJv583Age7ohrQoUJnYGn8Q47R5RVWgZpzuAPQ2VD7TCGfEduFAaT6",
  "key33": "2vVCeo3oJCB2FSspvYhCC5aCbCf1fA8K7w3kUeiZjkRkXDNjfZy4C9W1Vs11Dtp42XULEFNHT8CHqrd7hE2AezcN",
  "key34": "5ryMSRU7oYTy9vH4przTXAmjECmeMekcraanSQT9FwAoRwHhcUW42ewnWpLw9jrxVd8ayPjxZ8KWbJZJrhxrqn9T",
  "key35": "XMiuUUVUMtACX2TswL6JQeEyFHNFAm4eoRMFBgWCPB5s4KKBhfxvf9V2ECWDsPS4LPQov7LY3hR2oJCgAwSVXd7",
  "key36": "S9WaV3RcaKXhUdNmgzvnNDoTggRp1NdY7DyiuEd2SjL8y2ErZaXs2wv23nP18UBPxiGzg3TJPq3LETvMmZTLUKP"
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
