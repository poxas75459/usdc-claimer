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
    "PTbcQdiQiEMSkCnub2saQKVzyT1eWEonHfPFY5Fhn3CWN9ytfg5DuQ9c7kDZWrJAGNiMoo5gxKckxVvLszZSk3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yi8c4oLDZaKPkP2fa2hCBHABo9T7isXN6HBoHDDAz2Wr6zo4GniQzxCgCpUmiDbtnE2uxZAbYnYpivZFZzbFZz3",
  "key1": "3S9sB8wcwFPJSWoSNG7zAQ43a3f2Ge26VTAxuYWwj7PSy64iXPTcykaQNvKC7xLR5SmbUj1mXj7J135xcyt1d8y4",
  "key2": "4YVnuqZYQd4H7tJ8uPe14LkNsJoN65o8EoL8BJfoaBLYpeUENniLSQrYnQvE6mMFRK2H6krX6osz8kWnStbN5wXq",
  "key3": "3dBXTZHBn56ddtchk1tTQY2FcTA4sa2Ry65GoVvnb38gdydbh3bsh1zeeppaVnwE6Y3PLyVcwzKujvxsDjKyYi8N",
  "key4": "2eLFuCUnqePjwKYQ9kgyTifzQLgj2y2r9mszSonWvCuGgSEcxm84vYu96GN3Ex2t5yzWCg6TprNpm6jnFLrYR8D8",
  "key5": "3xn93VKfZyq2xFxmVvzFHRiAQgmgJjL8QHKyRA8vKLWWTtxa1XYAwm5N5mS2Vnwth1hT5FWBXV6n827ctutuYuws",
  "key6": "5VKjngz84XCgiMz2qKqYqievk6UbciEPgLA9f824wWtWo6mNasryPJ7kHTupEadNc9RhEgKsgRRCdvE4P8fiA6Uc",
  "key7": "3ngVRaFmuL7bC9RSqoQAKRpEh3GvZDyZssW2yV3UVj1rPuxdtBzFzFecAAUqs1BBTqKESPEK7nNQMNCRhsVk6ChL",
  "key8": "57DUZoM2ivjTPykpzzfiwbHM9qqyKhP53SpaEC2tXpjSDX4kJNCNjxwzbhqqPUtmTkEw4s2hRpUoMuMX8KK3J8Xw",
  "key9": "41393PHNgrJtPWT38XvRBNNSMhu7o7vqNxdzKMkLtS9L9ZkhNBG36wBUUJvCGLkjg3mpfmCb1ja3kPkFue7XZZbW",
  "key10": "2ADPU8ZqxFRiK658crmcckF3ZvJ8fQe6SjdjwaAvuiyzmbPupFEN1DcrCc3t94eWw2cswSfaYNB2NQZB3ZXSVycL",
  "key11": "5CjHapkMr9hLmDQd19azkQNwgbQ44pBG38iF4tVUkVX1NCLUZckHxQk7u6rfjUK7iJJaNFqNox4jSkxfPnnUz5Ae",
  "key12": "4NmGjfFqRb4mBFd95RCC6VWezf9w5JxkyK4aL3REMHiucMRiEk4GUT1W2BmupBMXUKtUnxqkRWT34vSeKFxFdQLT",
  "key13": "58ZneSpNxcoSQEB8dmHzX7QxtppfDFWCRH8SGqVHudaj5aEG1hw6ooov39p2p7Ym4ge41meRV6W1ez3mwq3atpNB",
  "key14": "4o8wbta63vTRKAgEsyb8Z6mBcn4Cdx8W5T13RkgZYrgtRFRcjbnzxy3Nm4F4ENTW3AnXrxBwqpLWND3mVeMx2LSu",
  "key15": "4PET1xVgS8NSy9DF6ZLt14UcVdYMWMkLmwXsuVztAZ2o3Az7iJWjb6CHxyePZXRfAFtsfWsbTVTn45kUWuNyVaDV",
  "key16": "4q8y7mfmK3sutegSDxU4QQpWVspUis7JBZQ43xmiWp3n9UPBc6PouwkT5wPrP8XNj6KTXy1qJmR2ui7SmNhr5uSK",
  "key17": "42EHusvE6XWEV2zpm78hLBT42LGQWsqFfUH5aYHBWgzUxzX7RYZFkVGrBXRHJcUPEvu9CLrfgKyhgGtuMLQnm3x3",
  "key18": "3vYPMkHs9kWhHpaxSHsRtPF1hEyTDfNLW2DRn2NXxexaQvrwtP45wZL8qSbsfCah8fRKNZnbhGQJy1ubCCTFZtaS",
  "key19": "2MpWb1zQftiRMTZ76PeuSnLBBPR4VJwMqRGutMs28VoPU6Gg3zdYRcssavThgKkFw8f6GSKUCEMypHYH4b5g52zN",
  "key20": "5KPwAUEQbeMMhkM2GRnPJ63YVhRgZjdEVmpTzpJ5HeNcXGsJebw8QkjwitDR4jxcdZDCibvXuP6XuwXXXft9gc84",
  "key21": "4oQ3dRAM5pbwmSVLSjucVwy45k31nDidyPNSpkAzH8oLVzm2ypUmv2nG19ipAqiGdLJ9xKXunZzZQ2soPdGBNb57",
  "key22": "3baC8VBLo5csidMjU8iqVs57rb49rR3yS7oYSwWLJmNY2KehVKaszS483pE9MKx1YR9ZbWUsETqAXqfv6MmPBEUy",
  "key23": "kPf4UyVsCemmeNGTP83EdJkWv9HszdLJms99YvkvmVMQFXMHsQKJV8wWortrV1rA9p45Ri1XnmsVyDZ9S2YtkET",
  "key24": "3CsG4aBe3gVEoHfCkKFPKQL8EFRK9JtYeG5xBzqYdykpB8uf5kPUNpFQq9z1hsEDsjtQqdbVjpBhWQXdvr5M69hp",
  "key25": "4AwH4W2mYTVcqv5mZQSpmU7zAGxW7MEi8fMnRFwBBi6zsvaEZvEH9WQLtbXYxsVAQLrCP9JhfhBEoXp2ehJ34DEX",
  "key26": "2oYDp1wrqKvGCXaXrBAPeBoEuwwd5KGxKuseYHroiP79kTyM133HNXyAVEJ19P7JXgNbsEPfwiNrjrnfTc4HBDgW"
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
