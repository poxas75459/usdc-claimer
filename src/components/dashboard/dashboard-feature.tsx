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
    "5ioJAyps7WZJ8WjMkkpEtufT6FNSTREXCXgcktVrJpJhLXeHuF7gsv2CjpB1yJ7AWyJX5FtwdYhX1inNqAnZXs4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dWweGdGmem6NfwePDSBg4FtHmr7qwwxYJBZNpsraFs2ARNKwY6WptG25GtZLiSYfLTeWwxB7UwCA7wr27xrvcey",
  "key1": "ok1gzyLXX7dyWZY2Etsxkp7hMYm2sUMiECDbV66AVUNcUL8YZoZFRDv5vH5dDc3kytZq4UE77o4gws3EhGRwY8d",
  "key2": "UpMsbYmTFqZiiGgCmZiqofXgTgNHE93aPQN3CSbEU5MHHWFSH2ars1bgCqbkBNTCi6tN6G2gDLTjbLDmETo2MRb",
  "key3": "49AoTjgZuzUai1Kg2NodkE1PdppYqW5uyRFLNeHFzsAMfz5BajWLr8ZcKc6YsqdJEXNJfHaEb17616syLGTPKtLN",
  "key4": "5N7AavwErq1eUNuuQu3zG9RU4YUwLKqgSwKjpcYwt1uoz6yjHUbHAvmhr7A2VubRzwKyTBxf5h1gKWAmB9gEUXEP",
  "key5": "572EouoSZ4k816Su7mhAR29w7cwneWj52v67YqGq5qw3USeztY8ED9KwQXf4HpVVPJ14Efp1CHF65YhhyYzDMqC1",
  "key6": "LK7R7dSKmSAwkwPj4oaancL2KbwSHHL6ZxgqdAHECNyH3zw82wkZBPLkw1M4NFBxeuSpFVMc9aDAGm62iExMQu7",
  "key7": "532S3o6Hx2buvh6geHmW8FCiQk9F8MDDsYJzM6wAQnyJL5aRvGJPE117yZDbJCLEyzBoq6aNpJNSpSVocZFzzy9i",
  "key8": "1UQuUyCKtSQYkDMQ6QUFN7qCCJf1QGmQEY6C5huGEUUo67avJnq9ggE6wt9xZVEbbGqB9hXQsZB8FB8ADbrePFZ",
  "key9": "3bxH9B6G9eazsnMEEPCRSFwfpp2YMvrfZYdVqeD9aMYAd4RuPn4p7CTEVcSnwEnwugiCbtKM8XEsfcaHx3WG2XJr",
  "key10": "5jCve88WNzmZoCooHUvsUYjkNXUZjLci6WTFWfyNaFWPdTPQnLPFixEdiHcpYFuiuS9hiikykjKgH5CdaRoYJZPd",
  "key11": "FDzYjcGecwf3F8jg7vnFSVR9AsUpEqH3pRrwSwfNrzdDichnMuLwKCStEDxb9fBrVDkMBiJBGAziDmbQ3KC7eQb",
  "key12": "42YX9Ep1AQmfcUZLz49ycgTniotct5T2fup67topaLBQfg2ZvqoNgpYRyJDFKks3X8dZZnanWm37f8zQfrzSPU1A",
  "key13": "4n2ZtdHA1NoRDgGLg4jKGptUdG9dfU1sNZhqgfB6aEibCfu1wpHcMjJr4qKnqAWQQp3ParPF2e18DXZUgrjcYiBG",
  "key14": "62p1buhmoTavrwXMdEtxjVTcpf4tGScHLNBtQwW4e3JW1tHmZYmYkfnVQD3uMALwwwK7A9aAk6Yym7bp2GxAte4T",
  "key15": "3HdGD6LS3ogA3aeEdP6P2xXdWUGyfAztWwNna9n4UU19HLfsDSVuhb7x6NpLdkoTk6RxeN7VhdmzRwVV1VhnbPM8",
  "key16": "4q42WR54fWzqwFdKoWgcUPMK6hvZW1DpZNgZdR7B4kPUf1z6BmozmoMe6r68r7S1nUhukDJcHHW9DDQZpLmBhokq",
  "key17": "42tBHjaFsMF2GrVjUsXnTHm6egsCiqjuxCEhq19tBE2empC6Wj7cmbknM2m1pVvHCcn43DHtcC7xWufxQSGNEjv4",
  "key18": "aFZY5JbA8sc1iFhcmzW4d4146fv2p9LXByg5vjdNe4Eps62Mzd1ndnacTghxWWP1QzjMS8eaBNP7mm6FtR1HAhQ",
  "key19": "4vF6kinmEAQAYJhqN9s9kDGonHa1ogwJcmL76HkfhmFqrSX6EwCHniNY4Zd4MLGY64cDmKo5x19KH6sDgdo6DeVZ",
  "key20": "5My3QZBkgbwoHbdVoj1DHYbAtXYshHgqVhLKM4UvLtxK6hScALhzXjCAyT9QPNqDv7FjuGuB6JuDe38f4APMHYhm",
  "key21": "2uMEhTmKrLnUoXGxYsut7A1LCYfxGZMUKoUT6zeSMvVzTyBinD1NaUXXCLiKxKwNF8BeyTUh6yvussF2bpV3qud5",
  "key22": "2NujkWutnQvPMeUBV3JXC2dQAbSZhq8rVBX5bxRuCzk8ERgMviVFfATacb6vABh9jvRh3pnhW7uiyCZvi5hDC6UR",
  "key23": "2aPUvrZqBq5bawFMc1mCg9LbvHC9eN1NR9CMDitCKe4Y2Aarw5ZVfJ7oJQkU5SVKRyyKR78ug3cpE7DL4ZkKeyjh",
  "key24": "2TM2DwRy1EVxzDiLFxESobHaSGZwDtonsTpTfxxsP24GjNiSEQ3QjywNzQg3J21fm3Wo68NdWGStpdqJqiWQwahj",
  "key25": "4LU4ySYfhrYnxihzYgH9mPLS6zkZ8KCNF2yjG6sksMSbu89wUwLDMuQjU1TvMHHtfeWaNNygPTYy3FPisoKx8kPm",
  "key26": "2MgehnxRAuF1ghSDWwGjv6r8C45mGr7ny7rdwRBaNJ34AzRTGqqnmKsefzEikKSj2u1c36He3BmfjsNPduUqMuVj",
  "key27": "2Gh87FwfXEbtXukjDXtEMpggMd6tkpeN2jqi8T2xXw5QKEyJovhUmveKcC2gL3E1m3PZfpef5nmKzqz6daKPqPaF",
  "key28": "4snw4p4Dr4ownA3FvqSkNRcEMRLUyhnQv7oog8vP4aQYztuPdujwThT6oa65jav41KfAxjAohKz5qXifqt1ZUcgq",
  "key29": "3jWtWu71Lxe19tdgrMXhnHNbi3FcdDFU4eq2swt3akoyDZZKmaiouYXfQdX3dCVdGQhp4CzLPcVSXPZ8eM5o1Mfk",
  "key30": "5pAPpmPsN93wEg6DVVdwYbsiXVTfngfrZrpcsKyY4oYNt9Hwf5Pcj6XTVp3CyYxRneoV2Ac8VMrbEVHBMck5DhZx",
  "key31": "2hLALKNSUUwpjrwnpRHaRedVRv5cpDGvXEsjkhtTeUhXQrTyqAN2sB3G3cui7T6k8yMW18iYa4g7XMDVnpHuDvTa",
  "key32": "oQYUMy94UjfcGFnEvXX9jp43sGf21Db9HBwtspMA2NSC1dLPeQgjWVbem6a3snStvEea2VByRfVPeoVg8WGPpg2",
  "key33": "2PtL1r3jag7BDXhdaQAiydjy4NMYHP2Qa13Koe6vNaYJKkW3P9Sb2pgxobLLsgECtKzb3QxAKUtYTNatH6u1gECT",
  "key34": "x6XaadGpMvfAzgaRrfPPRZ3Nw9TnLowF6k9QE4RnZo3MmKmKiAEiGN7qyjqp6YBV4F1YSS1zdhPLPwTDQmAuEeT",
  "key35": "4VCDZRdkDVoibVA6uTJzAhczmmxnmTGWec4dPrw2pk2Y7szk4PgWi8rhdMageGMc8g4iPRzZXDLXj1cr5mczEJUH",
  "key36": "5Bz2u8YNDkWix7M2ksuXb8ebwVF1LVceZoa3uXqPXbBL9VNuZ6rccYvaeBy1qpqDaexi8arxoeVYfJX3Nm4C5pMZ",
  "key37": "5vsAMaUdCW9he3d2xqCuFtUN64ztNaUoQ9v3EfvAtS8x2FbzC7yREu7Mjzaj1vYSG6fRf2ZADpT36tbGQcifVeUf",
  "key38": "5FYoj7GMttdGqD5YUf4pMqAP1GnSTQkHJ3DL3CWYxbFKFfejbaXRJdFjEwNgq8QNRB1UEFwgb3V9vzkNRZEBi7M7",
  "key39": "2Ghddc5sfkFSypzhWdmnuCetVC4qWQe4eSJ4wJ98bT5Jz1CFkha9NJ7w6VJWMzm19HEdMoixCw2saNPSMepjaGr5",
  "key40": "G5jjkMSr2xcJXo9fmxg8ftY4T3XhveWv3h7nMWocGUS13TUdgPQyuQTNesQVm7kg8Sp2B25crcN8iQE1N6UAs5u",
  "key41": "ENqCkhVbZNbmwSFUnhH8GYP8khvMREG1x2FXpD9qYrSRm1B2pg4e3K9AQiusMoPsbNTHbtv7eNXGFuCcjaMnUAE",
  "key42": "3rz1tTAc5eHdqBrH6GgNxQ1DDzAZqyVk5P4e9ND54uuXPdB6BYbudkjrALVj8sCtHpRJ5JxiE7uBTXWLQsFahF7g",
  "key43": "5wFWSM5uEchWh5szsx771j3ivvpCCJzBW2pGCVMigRN838vmnEoeNKabHoLFTgMWtxGyBXsgyeo9Rza15A3wLYcJ",
  "key44": "5tRB4t2xK9xFgx4PcX2nuqvaPGNP6hpG9P3BwkPGdtmDXHDqaEv1EWWzDakCd9VuDQRSJqFSsNR8hTyjJCXnNuMz",
  "key45": "5bHG862mnEcV5en1RzrfvqjcM1yDzke8tfs3QZBQyMEsnuTZuJprwtNQ3Vi17odSqtdqX4wARpYgcm6Tg27BBaog",
  "key46": "2tXCw6dbw4Cq3JFHzLGdeZYzSAq6QaopH3DqHHgueDvGnxpgfD4oovMv67icbrxKdTMJnwWZfZEVsx6iuo8L9Ezr",
  "key47": "4LxJU8Q5623RzrGSKHSvzhn3M1tEp2mfLYogmTopkt3vNdaXwktzJU7bzY97BrzJjJ7rNbhvknvKNZpD5qdUwXmF"
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
