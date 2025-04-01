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
    "58U25CasJX6Kf7UM1g5gukSNLc2UGcM7sxPXjNfCp7yqamken5cXbGRoFuVt2oEdAcYrZBwLsGapKPKEtE1nLUJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5atdNGGuuprZcEwLtKYo5arx2nMZjAV6sfxHduaua77NnW77wV4beJGN2NT3onbF2Hw6yGTX8KYpXGxkZPJEarRZ",
  "key1": "23qR7z3tthevm1cimrsYsc5hKpDk97Pdj8zG7Sn8FCBX8L6pGWHo2ZdVWo1UsACof4Jg8wrxiX6jztH9GZnLqjac",
  "key2": "387kcmCbFxbXhm5KCKdpF2pfS6aNUYjNmf1NR31icYEtUEfx1XHVuRi6NfsTrnSSvWPp5eXm5ikELSBTPxc8QeaD",
  "key3": "5Vfst3kpCc1djCBi1PrCkRRKjewkR3rHPkbDBYostBtkmbc2bSq4TrYrpsBFmzJQ4PnmeBdzxDQJCXwRRcmfXpNk",
  "key4": "4RzMdFLCrkUQiEDbyz3r247W3UBzgkmqaXKbERMoMaC18LAfsq7Dgs5YedLuy7Kcz7Uyu2A1okytdTZ9LPEK6hy8",
  "key5": "4MEtLYLm3sMcSa8nADygdY47s16nqoQLARjnQWJwMuY4enMwtDgmsMbBJdEfQmSCKHKnXssMxY6mGr66Hhqucgzv",
  "key6": "4zpW4TFRfSEiprYFXzBFPGKDgHW2pyZz7AzEc9Nez5iUU9RJnDpzACGTMqoUxeCLtDTZVwFsu341ocVzEyawtiXV",
  "key7": "3EegTfrsZAsXd7n1NzcodYZ85qzBDp7rRUBt2bWt3SB8gZzyn6zL33jg5K9uZ1WBMqtWStR6A12CkNj6THCbpuPM",
  "key8": "Rf7y26U4Ex5zYXPmaR92SadnX991EkWb7mFhraqBXU6E7T7ar5chzfyQCKzc4zMnZwHN8g6edZ7otmUz5Lmtt8e",
  "key9": "55ndjKpP8M1TtgLerhopeYnER3tQsBVaW8e68pyfPUerTd6XcfA4aNHQvYdEhqfP6DmXoZxcoZCpoGnCehCP4F4n",
  "key10": "5xiBc2Lxu2Z8mq95tTBkq7dronCSRp9pwZZYBP57bdzqXQRFatSRTjcy5dfFkDCKoyR8u3SHJq3tWSZstmhoQ36g",
  "key11": "2DhSjRRbqsgyh9vwvwAmsaTkYvYUidqWrsujuBCNMiiwd5TqKDm9HKh6tWKpWVNEbKyS9vw9nGyPPw1Ra2wCkaBT",
  "key12": "5ByoZzgqU42Ga14kPRtvGDyLZDCJXhfRdtvi7r3mPwR2fkk3LFBhmBFsRDtkTe6LLgeKtp3cciKGNCmexK5bKYDz",
  "key13": "2iLvSZdYmLuUuYJL1C5WcRMFkwXq4C85THyjMQeYH6SJrw1UrZ2TzKkNDayR5nhgM5EYPjJWnRMq8AeJXrUGiquL",
  "key14": "5QTaLTJwpGLfkXrtRf1JuKSbtGiUHiEh8oXcia28Pgj2C8ZbbGxbfHwC3mraYpUKbVPAY2KTFXMDezNJBw7NythE",
  "key15": "4k1WcRJx2fSqehdfpv8xuBuwFPLe3i65jdWoo7eZaLsHzemQrSUa27SkyMu6aZ9dv3cXmSmmFWKdYecxu8uzAAuE",
  "key16": "4vKGujKm9ZJZpHsztfRvQF19SHNE4XyZ2aAS6G1m6cRz267Jn9UPsfok5iq5i4VQm4iZEoF4biqzv4B6sZh1Ks3a",
  "key17": "5FtrzaMrR72aKssevbNn6BwznvrczMBN4xF39bpJ6RpXe4sPkLNJqMRbfEKMRikj7LBdrB2TmzvHBFzBZsPpGRgn",
  "key18": "3zuLqEdKgwGGEq64x2m77ZdTfbe7SVV6kas9ByU5Hs1KDy1A8UpK6ZXm6Q562patijqamwcus3yr6zPd3m3YEQZS",
  "key19": "3FgtdAtDXx7dkrWdSLvS3Qi8osyvTrXa6WokLhML1CBR5xVL6o5G5AkE2DBdeqrNL8EJSvoMe9XB37wqATFVV6HZ",
  "key20": "3zzAgHHUGzrSUvJPcm9PnLaoFatyiHrBjAwdCwWNMxt6LKx4Smd2MLBArK95mRhH7RW1MPqbk4a6WgPG3UGgfH1U",
  "key21": "4pT4Rp2uNHB1vhwMbzXuNSQvutbwzm9NB1zgvCZFQzDR189fDMcKJd59wutocZRYy8QqG1WLeNPwxQwJv87PVyF7",
  "key22": "5utECDjrx1Nu7yoa4QBuonPsGHoTPg3pWuJdpoLjCZ8jeC7ygG93fkvkv6awLjBVJtrZm6igC3vNEgbtW9xuD623",
  "key23": "4nrEWtZKWJ8D6XFYjLxu3EGuXpWy9s7VjhHba4yscVthnaC7DLLmqn9K7MsXbK9ccduqeVWLjRKnVVw4zivQh1vm",
  "key24": "3K9R4CkHvAxxGKCgTR3yhHvLcujv9t3n8xLq52K6zptT6VziPL4HEQwfbh23fP8U7Egk8m8Uiiaehxruf9HzpxUB",
  "key25": "5ku5GdtpJXPPA4iVbDSKDBEQwLacm9S2EYeQubRb2HKRpK9NfACknyArQM2TG7CnMJrMcvaGg6HG7kXWPUPbGyaS",
  "key26": "63XbJYuXA7E2jFx3CJf2UUdESZzKuk9v5GLax8rAPfoBcEX1Nb87rCMPCRjX1JSb87VKYcUJx5Rew7FRYKkfXD8x",
  "key27": "3ZZbvgbds91WE6SFjMRqv4Za98renXe7iQHoCxtN3a6ftcD4xan2WUKgiK92YM6R8hcuXNeUxoRBtC16TyE7HDci",
  "key28": "3rYDAWKja7HiUMpkw966DLCSUnvidBwAxhGJiiyt1i1UTSYocbgZvVSP4eBHr38sngrELFNjDrnfimb8UFFVfFYy",
  "key29": "2hA1doUhJBFVaZ9F3bXgeeY9dS8jDp1dwRVSQCn5QnnaUMVBbhXJxf3ZQDq3LfqEAMhZ2evY8412iBkUZGt8V3Ui",
  "key30": "N6bJiPMFDW762ttpfNGsKLoFQau9RcT7kjcmEv6JwUZZ5pfqikMLWVmCEd9Ebn7uutzN58JMrmawM1q772exd8u",
  "key31": "4keSdKexrWawskhbu1QvZ2aYW95ftfUZaqbXKzQyur4QeoBeRHYNuprbwHesCy9NVfCLsH7CGF5qP5a5Djc3DKyT",
  "key32": "63VuHgitQ2LTpgHMLKJWvqakZhAwyyY8YBE5FKXgYpC2ReHZgWBCRJ6Fjm9hir1RDYftRx9WUCU8GkEsmfK4qCcS",
  "key33": "5tmHcdGDAywoDbBmys6jKYGbZjLonkcNPogGdhRP9LUP7JRkxvQct58vNe19WSnydat2LkyZZdL2yTmjSdLa6oBA",
  "key34": "39gsffZZv7GZV4nNeKAHfFyQDmNUrpYtb1XoNhk95isdKdm6pnVcf1SZ6kxAPuWSjdxNdNQ6jPUYiRoRgUbTQhEN",
  "key35": "39ya8KXC4c2dHnNcQ1AZY813naeLJADjBFiQCvExvEDD1VMhaCzqotYsxqZeHniYq2zDB1PMVz5zpVMFnHTAHcSg",
  "key36": "5k7Krictuz8JAPRFmfEioVK6nRHguGCp1SBf59ZW5yhEazjS4rEYpdeTogsV1Z21eLuJ8MmMvnN1kCCGEC1GzDmo",
  "key37": "4FrgnAWsxdiqcq4fgLkqfmhCtJoN846DnT1e9xswdoVWCg29bPk8ni3uuSG4aibLpRvfjYWgUyU4x6x36AA6JPmx",
  "key38": "33wYwsaV2g7LEWkdEk5o41MizFxcTF8KyXVg34v4C2EtR5kATNCK6rUFYgvyzjwCzeAb2fHSg8LUZW9A7RcxbGEH",
  "key39": "4DJ61kA71LgcqN2PPLbjUUvfcGNuWxMmD9Y6gdA2TBgAPfJaTjJxQEdpvKEVdFM3WbhfFVJhT5jsVbUse9ji9zGG"
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
