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
    "3pBfba29eYBxiQLHzwN43uQWrCZzim97rk9uEYbMeoj91W5ej5GpS85mC5yKujhkbTUgjVDGHGgPLoj4KDVFJYmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uhw3BUKWSZKUC5EBvJk1JJLYU9NPLLKk4fNvXxeXvfsQNbMjpi7jbo2xQCzYksYBpY3uswLbKz5T4f53paos4D6",
  "key1": "4vjw2eSLMBLEY1FY6HNZqewrVWGWGeu3VvNvEaGA5hVH2B6z1oUtNwULAY89NC5r4vKfjPmW7c5wxFqrtE9jgLzz",
  "key2": "2QN4LZdtNdcFXWKro46vHGu9MYWivqRjFMMVQg9f6ux5ZMvoxKAWhMiBU3wprnaPfQgt2maGVS99jwnn3PrMYaxb",
  "key3": "2srFTsPzmhu4in8UxZmjtnRubSf8R8LjkiAQm2T7ck82Xhi88Deyq3dnLn3iRpacaoD2XeNEnCkQSjrEN99fd83o",
  "key4": "L3m3CdfjivC7s9pS1TophinPBeoZtBjWGE4oygSiFFfUHCdJVHb7PBapQezQxtZVJwpBuWE3hHZjN6hENGyAVoP",
  "key5": "5Vh14rRdQWeCjrx3k53QL9SRevP8eHjdDoH66nvKqp9nLM6U3yAa3UUzYNoFNB24ry8JZwAMht76UPFpnfKA9SkY",
  "key6": "x8MTAV7AeNZoEsMDAhWNtBRukfWw1LzwefxZPiRS6B8C4wNK5vrf3fE9J2reysXtUbJ2npL49XYDKUXj6XVW9WX",
  "key7": "4gvLG3rq8hGqu4Vx6tbQnDSVrNEfVPBNBmVY4iUfKDBjfq1im6iU1DuzzStYfDk6LZtZj2cF9gLiiH1tWBjTfs6Y",
  "key8": "3V9SBvQkfjW5DvyF2htdiBWSSn4Eq1EYUqMYyA4daToYUeM4RFnTpsWBt4EzEwAT3698qAQrCxVHsJpT93X4FmRJ",
  "key9": "UDq4uefALsAk6FNr9ChUv49MDgZ8RP9nWvhZ7hmxmkDw5xKajjiXJsdXimz4PkiNWqmiW3KurS8raRViscRPkNS",
  "key10": "5Ax1Q7iKtUujt11ah7Qu8NyeNSS9wvFRuPm9nCMYHR1ASHFNrAMMwiCdkYXPhXDVc6x9i6VgMAUNq7QPEv2JgUQV",
  "key11": "27ZqRwJ8RnsZ4czhNFNzeLwtBtCLNg8Sv5gNdcHsWVVDz3w3eFxFhr6FAFbfpTJAbZUn4oAbJYuULmygxxf7GE6V",
  "key12": "5fPDxnr5uCWB8wZSBKPEcEHj2sMgZDPgg2JHVzTZ5aSXBMyhq7JVZheJNK3bzd8ANxjKwR6SrD7UfkMYewqDZuHq",
  "key13": "41imAoJ2RQQK549VQXC1cjTTbZd4gs1n5mseC8EXPC66Z3XvwdmW1dVGib2m56tDERAdUMopjBcj6Fw8xX93YNRP",
  "key14": "4mixMefUHtQTpmpLsjZwo1rCWMDEajByvbpD3Hx4RecharEEwCEoqJzasUettpKnq444xBuqt1AUeScP5zMQP4Yn",
  "key15": "tzrqgzcjjjdZ6zi3kWYRrWtPHnbkyJ9y7iBS2Ljq7kxLjLJrpG67Mp3Qxvd8SBY7NJH9Cmy9wqNLq4vPhmYphDL",
  "key16": "5taWPpqu78DDzKX7DZ1NpckQtSUmDVdwJn25fTy1FsRKtXaG1VtbXq7CSR7nfxqrttbcXsT4UNeWU4zEtPvGJyJc",
  "key17": "2hP8DAx4fwEicTGChp6rVuQgUeBkJr5QqbLaPvBCCfehm4gJGPbdYmWohPaSraJS3UBmq1eMJDM72oag6ZSPtZvd",
  "key18": "MvVvF2gvnmpW271FotCEUwEr1BUhvJ4hyvbSKpZhUFCtQx4biFh4pj3TfSi55mATz5f2CcArSauSjXEUFX4DtXU",
  "key19": "5gDZkEEn1EtmW94xK5B6tzYk5Ac6H1Khczir3JAougbWNNXcMH4jucAWEgi3oFcdxKiArbvZjfJTi4coh9FB2ZFZ",
  "key20": "4XVNZFxU1mCjbpoGy1VuyiLQBF1QPbwXPzh2krW6JmUgmBFtEpfatk5LyNDqcUGssSPypQabApaSrE2bVxV8Axec",
  "key21": "2fkWFwPjMaQYq9bGxMCMp4DF9D1T54pt4Zr7wMSnckbjsCJG83oMjfML6wTe4TFNsb2nwxuvxZn2RTbAxa42uiJ8",
  "key22": "5HzpTuSz5JdFgDWZpLdj2xj1YrMkcNUH8iT8QCigK9RaSiZovmt2smXJW5YpgCaGQqKXKpjVBrvtcSrpWdynPcKi",
  "key23": "QbhzUFxajyS3LJQYZZdsyjFfUXQQjQwj63CybPJYaXYhaqkpzcEZfQDPYeXwsWJQ3pUC7fsaVDn1ckRrna3yM1b",
  "key24": "pMAivu5oDXsMaBLVzLQNj3RLPWwPWXmBbZUvvV5wJhgU5XvHPpLjdoELb5eCa5KSNiS4MQ919xBfMfk4cy1H885",
  "key25": "3rPFjUSdgAtoagBkhnE8XKHDr3ryncsBcTA52sXPse6F1dRcR3Qjyb8ezUrjVwiiqJhdmmAJVtKud8RsmuiVLGKo",
  "key26": "LRrqoWKjNVd3wZ3A4H52HLFMaVSXms5P6dAaNTFBNooVLwv7SmDMdp2F3d6T2yPKDK8XxpBU3Fc1nBNcypfg3dZ",
  "key27": "4DP5fBWjGxAzhnyt5SArinGQ8FrvW6TJMNcv4kRwvzhfrtmAb5V9mo5ZtXw6UxQ614WoFDXMbzJmeRkb99tjkVEL",
  "key28": "Rzo7QV61rd8vs8sDzxLPCyB8vJWrAmm2naAASs1HLoZyBMmEo3AtC8SU77y8UBqcFyGEsxsKGJSJYpoGMYsfDrq",
  "key29": "gYTXvcPw7wBFRAa9gtidUvxTqobakFUZ61QzGRY6Uanj2sM1D3B5pF7HVQzNqzwBab7rhZ8YANwTvozfDkMhWie",
  "key30": "3e4vPedLLRdzzzUTE5wXv2Quu3N18Sh9HfRvmeGWR75XDZguzjnv4NTWwzHGgHyC9vAa5WVF7Qq2k3SUWRR5c94V",
  "key31": "WhRV8suXrSHeysjFB8KgvWaYbNtAJyNTBxMuYUVMDGYSHHGqiTzPns31oLNWGwY57TjMmG7NSToUeHAc3HDsgi1",
  "key32": "4BBKecidkz5ZNbqv4FMQf5LiXJAe41HwP1rDjK5UdGmJMSLUxnRePWWYa3MLLT1NwwFdB5bYjzr266gXaJoRox64",
  "key33": "447KaCTAnpzFXNtBpuJWmCufQ44Msgcr84QjN2e4yp4wPRxTt6v3xYBfMwUVZK1EEXemkup8YKndyLEP88wARqtw",
  "key34": "sfEv8LuyvAoLZFYKTgLEgg32qqSc87KuxXYWKH5DGxbr43u6E59abRTF2NH7AeLuyk1zSwpzAVcza6noiGCWouQ",
  "key35": "3742bQ3ofh8pCcamoUTxM5BuT7QzVZuRVfaYMNCU6rQpjMvr346UZ3mmxjaZjpjZWjA6jeHe8Wgq3SP3fhjHnWft",
  "key36": "5K8G49Zt2BYJnkHAXsoswxo3bhRDoFYGca8Ni1DTkHiwFi4kyoUHy8M1WK1kCGtdHyNBozWxvt9UjZb4dwTaTxet",
  "key37": "3egKUx5JH1VvUpY3h8CFvpwdJgoui9aqZknLTymVg92ypsqRbBZydmZQZAKwY1Jj6PiVHjQqBTsJTmivStREE1wu",
  "key38": "R2fq9Y7d8es4i5HePtcD75SxLQURmJtpt3H3EWbtkRhBWhfTEMFPn9aDLcoAwoNRBRMxtS6keUtVQTvjxXVzw1b",
  "key39": "346uD8iMvucNQeG3Eou9YiTppEPKBmBbg5eoi9itZW9z27KVSPA7oK7fkLNDTZDiMPT42DkQk1KJxB2TJMrUkKaH",
  "key40": "59qnHMSKDytRVyKTF5ZpmhYuXuGhPy4wxoeVZ1xRazcsSJzHxdFXSjnqth38Vyb7ctNMoh58DYgBT9HAvVU8fYKq",
  "key41": "4n3Xh4mqXFM2oWKdjqz2X3Ceq94mBgQragGEbwpkwU8Yg1ASzMN5huzGzVRbhZ21Di4NwUBMShtyZCqfPgiVdixa"
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
