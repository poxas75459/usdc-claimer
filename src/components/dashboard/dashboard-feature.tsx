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
    "4X7AAb6iBYGmGfWnKpdp7xXnTzMLPXRaWiPNneJ5s5UbaunhBCtn9xYdUY4LAYrSA7FKH2q3ujmXSyL1VSYTjaPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33W3jwkwxCHvPbLnzaCrcwrfVaqooHPERnzXPgEs2KzkSzxQz4BQaksVXhQa8pTKkLUU1q9HgUVaizqmpEEJgW4n",
  "key1": "44q6rTBLD8csZp2XM2ZYqHknfWT5MrAc8X9jDMDjBuXSuwoC7qwy2giKyeic29uLaCQeLRXP1Ge6KgpU6hecajhg",
  "key2": "3xKR27TS3kZvWmpuygnCE6KqRxWtppQhiTPFV9hMbNp5hoeNrYWKVnKAeXCnCCQsKd6UZbssnYr2iokcqShuzCD",
  "key3": "4co27AqtzAysh97ah3BsSstBmbnrCJH2hGep76weNiwY7Udnhb4qEzHDw2TPzpxmNypKoPVnbZMbnK4ke51d6YaE",
  "key4": "3N1QVqXXC78GmHs7eHWPY1iWHJYro4tgBanqgUUb8En1HkQUVWUd9eHs7qj3iz8SskhTjZ8Wq2Hi3evfCD5ixM6W",
  "key5": "2VA4URLGJuzvaSNS2UzNjpvobZcJtG3EPnPt52zUMo4YzDxKwh7AkJiYz5fEatjHXxSRBsTgNUgpRkWFF41Ctkte",
  "key6": "3RT9qQWGtnhSv3JLF7631q7qPjC5ovjayKiDg3tNh13HxsPBN42XG15wXqQiR6nvB7L5acqLKHmYGaujKwaQtfxL",
  "key7": "3tHLY9ZRPc8dvMknPFp5raqnm6kLeHr7ehicpcLktRWyGWThYQ2dekcbujtQ9QaXYWbE7Kw9P9GJ1ycgCR3uyRuf",
  "key8": "7u8v9ixJ28TJSnK3Ppsk6tZR9aZLqcvYsWzwRLBu61HPZmvhetNuXWrz91ZuVkKKdv4xGKviJDf2b1nWoztqsg6",
  "key9": "27gEYakokdf1vZcQh1hupe5mFqQTT5QUxmmM8tBzRSyno2R2XDWL9WroQpwcaV2btsfT67NzpCj1gBx5BgnnSKom",
  "key10": "5ye9mnw18Kn2bf1a2nBdY8bCwmDDfbJgdw71uKqkXMa3PX9jRVMnpCwwo5bHFAyW89ZSHfaEbKbSNoxG5U8XbamH",
  "key11": "3UqVy1kCEZ7nq5Ywo68gzDn2DXzGPCEZJtMsqpT87BpJRTBX2y89CwYJoAgbPGdjYxkL69EV2auuctDjZRqAv4Qt",
  "key12": "3TvanpLWXRWXuAbfCPRQo13qP8WtS4QSggFxHYazReM3MqNRQqacKXCzmyDs4ipSucjxjCACxe4ihdhuutLPZTSy",
  "key13": "4dyRVZS4c8Xd4XPJhyJWGXpMMCCNihSdsvYF7KqRv5SUSWKSgEsZuvqaFJmJxhb2xiKLdcaHbouo8qFADmiKgxF4",
  "key14": "2U3v54jgsE12q7TqD2eGEevpYyDanhfqPKfwfuTRoYUz9P8yr5c3pzDqpZejs2vmhUzJbtC9Yo82NSCR6Acr8AQE",
  "key15": "3rZsh7gG99h73FPWXMh9RVNgiMxsfFE3K8YUJkzXkpmYCwi8pjSrSpDA3re3gQWkoyQba96pvYf8fHAABwo2cgU1",
  "key16": "5ByY6LGJxwVSKKeTdLqxQ8rncTsWb8UNNoyCwT3smmD5ZnMmQTzDsoWBvoXs46jmtxZu1BoDHWs4JUa5Hkfa744e",
  "key17": "7AkynxyGqtzG6dHMLuDNM5afraF9ohw2k7ZGQcxvF7xosjM2EUWr6GqApAhqGU6vBnQcbjNQ9KCNRhvqpAfNYZX",
  "key18": "3eTjaniyMwGu5686zYZzLK9jpo77rT6spWQkiTdRt9fnrth3ZJFZ3VnvtEXt6HnHtsTrrbhB3Bc4rUuvvd2nKmMv",
  "key19": "b9TffDqUADK84XNBafneg2rKa7uBZHWKvMeCaUktGeqbZ7cmWs3hKyXnYPnDCBLDApU6K18UrcJMbFSaY8bSKv4",
  "key20": "239sCZ5UnW9j9Jhvw98HyZWAbTWerwEbuar58cJQHvfKEqEjZdSrkuy48ySWexRdGGVCho79FrXLEqNwHarc1aFs",
  "key21": "4V8ToePpd5yHHqAgbkTtMAih9wjHdzocKCtzMqdvnYiRZJRxcvVWL9yzjgF6iiXvbKnZSBccAt1DoJnQxpPaoAkd",
  "key22": "4s4fWTdjBns6zSw3v7Xb6YsuQUMgmsJ2GYYroHKbrLm4H2Qe8RyE9d1bE3ZDYJTU67vA1Bg5ueqMd1NSxPAMpLs4",
  "key23": "2fEsnBhEBWW4NXNCeuTtuhLgsinZBgmuAzukp5oxqbwW8ms22KLB91vfe2YCzTWZggHinSUxXWSiHR5jG8Wm8Gfo",
  "key24": "2bFiYBZ1zRZMGuYd6sUntFLS1515r2kzUGAZLiqNDrvkc32UDPCEpCpoW9DMjNsY2JvCuQNgCPiJrxph7YYENp1G",
  "key25": "32CX4Q2EQ9HAj9Lcd9PkoWw42T7TBsKavVteMybNbVPy3e3BEJ641LKjRX8mt5UVAvyNwVafZVrJeLKbU79NAJzt",
  "key26": "458SgcK7YVv3usGtyb7196PJt7p4keuuvAQe35MEkJyfHuZPkQqRVoicnxQ7SVeNPitxCCUMcocbsgacQqD4scyy",
  "key27": "5w5cyThfEZYAUbQbHu1FazGeZS9FiKrfsBAN5YkBtifuhKVg5US6NdK6rzSGBVbxuPigvFNWXUgEAEbSVE8Dcimc",
  "key28": "52GrXcWs6Mg9QsStY5y3q5hF7ohbDdbFjEaVoM7fx1LPuTjVdj845fnahzGfyeCrmC5Cp9m9aBx54iQGdvYy9Din",
  "key29": "5KRRM3PKp4nyRA5gJozFZmjM8yXgqaTcgPhZnibQ8TSoxHZn1W5ynqf6HWKQeUnzKkYXeRd8Eww5bfzy2vJpvu9L",
  "key30": "Ga84yWq6mrSg7zJbXg93qaBKfDqNi6tBjH7qSpKWSDMx4LzjJ4dbFRFcbq5JzQxnGGCdep5JPXrjN1PumPauBa6"
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
