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
    "4UjcnLgcTbmixGYDEkDLtFERjbSPAMphqSD4k3ea34LGrXedViZCq5pvdRCXU2XAcAYSqXXCYvBeXiesVBVNk4Wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U3nbFYSvv6k6mqcy6SYe7QdBtXZi4z7o1a3h1FBNjqr52Y2HBLZyiugNujeAqL7f2zhvimhQ9mexFTQtimVb3p1",
  "key1": "5EeDT4L5Q1SuJ9AfvQ4psmCzLJ5vGautxJzWDrjES2Fs3WmkrXuXifN4ic2Rgbc89focZiXsbkAy5ZtoMPX3Yqh",
  "key2": "2saGpMHGAg6YsdahiMihWHbeWmDc6LsKK4nwJx91P2D2yJPBnfvvy99v9Xg1XVR88ikgKeVt7CB6bUHJwNHCqWw5",
  "key3": "rGZ9puiPbrD8DFejwQCt4QtYo65AiVd2p3GJ8bLLup1tvpwf3gyVNQ4od56y67FuEqBCh5K6nYg3m948v8K1e9S",
  "key4": "5W5EzqHZGj5mdFo9Fw1Uv1qhA9GaZtDu89ZkVxtQuwSSg5pWndVQLSSnmunsum6L5PvWPCui2wHF6ndkP1qmJMec",
  "key5": "JBVBbxGYAbENXRUgowdPmhSAZi3RDtgQtjfn36Bq6isjnrjQk5Ph6ZQBycGpogfVB1ipSdMLsC1zzVDywwSRwKB",
  "key6": "2cLVF9W4o46LY5t9KoCT9PhZySf4MCuD8kdBPK7epGjyppM1HKUMe5GaZCuUNoHCYNxhQwN62wYqR2eRPLL75Wxf",
  "key7": "44L4E6VmKPb2hBxp1SCTF9zknbtWmKxQ45mvyb6JQif15sX2LSDkLYbSwH7vt1rngwupJRjvYJLYKiUVG4BiMzoz",
  "key8": "24Pj5ZgxqKdM7bEMUf8r9SevUegG3YjKCKKEWuAnCi29pWoNndkB3FkyNc4yN2fPvSAaohj1MvCjcfkHYhQZW9hs",
  "key9": "3SFviGHLQHAHrKk1Tm1XjVJGUdDiB6wBF4JTUm6tefNqjteCNeEf5FqXsjPjBkaTBp5taXUVoPPGuengorbv5Pa9",
  "key10": "2aydYPEp2aT9NMZcpMiohGiPbrWmyHGw2CNrF4i8z1p2m4LJTjXpTmLTi7aoihRTaLLPY2qScQGqFksCii6mkZpv",
  "key11": "4GUUHcvurH3p9hDV6yKGp6dezNw9wHZ7QtFpSYCzNDBsr6gxqc1o1asKLCyuR7HA9dSRiFDCkG1eqBwkccyPMoFt",
  "key12": "44jGQudU2xLnjiWgvgzEarUYxGEbMBdKdHLWjYhE3ftDz23tG52UMLXaYjinJN3U9cKdLYh25KDf6wHdD4KakSTD",
  "key13": "2MEX8Ua8iDWB2oByvYjv1xSR83MTFLADGdzPiZRFxEUuUB5SJLWxoa99SQ2inbvocqBy3mM88zuLFbt2DuKvA7MH",
  "key14": "d7Q2djohhEZyRpaLW2M9jxLknB8RuiqfgbMUenSyjx9rHm6bnDPepmo2YoJJcwExfysi6VHqgHcSaMpCcJCnMik",
  "key15": "2BsKvqHVFNc4Rn3xQCsRDL49ZJuKNpncQTueNPYTkf5j1n5xf7eLnu3Jn6wJqTks5cdDSUoEWUnwWTBcdr38ikuj",
  "key16": "54Hhz3ok3eSbEdrQ4PevpPQ5FadAUXMpZ363CyJYwfsKN335SDhCb1TET3ThfiRUM632RV5K8BMZVCLGy1i7BxFf",
  "key17": "5LkjBPcnCpRmvrFnqkvjJR7v4f359cGdWTntsPBiJ1ossobLDoJ1wTpCxCpPuANWXQpWEgZvir7jrSJZ1W25c7XA",
  "key18": "52Bgt2fcSb7rjstNes8g2vbN32d7homyiACxm7tyJS3S2qAea8J5gPFrZkN8uGcLwfP5krWCeP621Rp61T41ayE2",
  "key19": "2iCvVawznoGaMWsVa7KQGjMzem5yXWyKEkVw7FmoWhgC1h4VvhNatwExJv2keik1Zx3rtXLcBHj8R1Vq72bD7g19",
  "key20": "5HKPEZbfz5GMXDAFbGn44eEZ5Ef2YzhbyG1HfLsSa5SZk746TFK1G67rsArxBhKXuu9DTNoRHsRKoRviKuGDNeuL",
  "key21": "2gho99pVkgVsArAz7i9ciy2DFhmqxNcGPKJC9yKxDv4ttNvwD4LfMb1q9pGikwLJGP5nvmySpQ1sQ6ZAH8M3PgGW",
  "key22": "6kiBGUbEdxLF1duEmiRdUSFBPwxNgLSzqdKN3MtLw3ex2iz1sbPiVkvJz7NFXMqrX57n6oAxmymv4ssP7zzRTin",
  "key23": "3uBNE7cML2HepEjK99WqsmxszioXyMfdbDSgm7fpteoZdyStGtWjiTq387dEobiaPyrAoAzt2Dxpho1ACQb6QBUa",
  "key24": "2mhFxUWirTJzUU496YJ8ArFoXpgKshn1DdQyuMXwxCy6w8GhWhXaWDQeeju3fEyscFFytgCrYUWptgiqSFbbzLt3",
  "key25": "2uU7o2hSXK9HPyr5s8JNWh8UEr12AhcXaGyVcL7jDBX1zX8zEyYuc7JRVoThGCtcf5Ct3y2zVK4k5mQ89szwxsar",
  "key26": "3yWP8r7gm7qkpXxXMbmazXKovWrqcP44bAyEuuCuBbnDGkCpQPqHxCieG8EWdKfe5ybd68LdSB71xE8VnAn9mP7T",
  "key27": "2Lb8y7Qgk9tLgd11s71xeQRK2GAbnWD6FuKET4auj3NjHGB4wsdpnDL2NA695fa3gDnhFpWRfezcDKdr8CmVmzu4",
  "key28": "32re8ywFjSFEujBJhjCjLEb93FkfVaBx9KBWwSmAMzRXjV5eNLixk98pvHBpzmDY2mmARRmK5EA3RHCQPzCPfkvt"
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
