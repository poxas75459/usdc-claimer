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
    "4Ewu8UzGLaKGi6Qv2zC4bwThQd3cLb7SbQtwJdm7KhTwMjr6hxFpauyYRYSL6vhimgVkdcc858vXzrTA279tvEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AkzqzSAKa6BbpFJgoNkBS8SSR9FfUgVN4szWYAipVzxjVNsZhPZhmhdb7R6AyN9ixABL3rHNNbNaJ6LcThgMeuJ",
  "key1": "BW7tm4FrtmK5azvLzU9yn6rmq8eF6dpeMwPbzd8P9cnKKnDcQ2eTADTXdYDVCQBMCu9aGmMBiFcio7gVKPCv7U8",
  "key2": "2DaVPqxohFyCn6md1xLHGspLvq4FSi8fjgEXnyNhVZqFXBH6R3tJWymDMGXACJx6eJ7W6WnpJyBRSYh9LFA8RYrc",
  "key3": "5UgPRQYwKTk8Ptgdovr4UPwKR3gqyb5GXNxkp6Ko3WVzPb9YU1vb61LwxzyjEwnETkAqk59NbxmHmrZ6TVfnkDn7",
  "key4": "5nmviLvf11dPZ5EFJdEiy1cMri3qZvyXnNuTvyLRv1Keq1STidkm4P7CeDjd7RB7FxLFrBTXK5ew93dPfmEYncJW",
  "key5": "3LL3kJrwwyMFQQnkPVypneXP5HYJKyxFa8VDcd7MSGRWLfHpV2pdUEneup7gE7Dav528Wc2uzjMaVgxD5aUuKVRA",
  "key6": "4PWwRWLKtqYz7zdDCqPLoBnR4xCcb6PawaqYEy5RxK3uS6sLoeBzaM18WzQUdVuYdgSv55YCyhReG3VoakErpuAo",
  "key7": "4KRzwDLESiqXtBQ4wLd7BgK5BPU63bkyDDENrLjo7rXWHeHQDVXtS58JxsTyRPwrapMVG742n4JURBMGVXfeuZso",
  "key8": "MCBK89MeuMyn1fY3zz1pJm92rtTErqv6BymML9a2YCzABGtyVUPhytHxdRsKXY1wGh6odmfEwYpddyMX2Fqh42S",
  "key9": "3Tz6smnmv9Uh7h7SFuySndtGDPJqtGYYkBDeyTmVx4soP3pesMWR8AiapCYqnQaFSKs4vYe5e5PGt1U2Uq5Px3H2",
  "key10": "dKKex95N2gKqzaqWQBMTVKSkvdoFuVdbBy4TxY34NaRiZcy2KQmQ1NGVeSKpCGUTLBZ1XpVcJNdtMfDRBXpWPxD",
  "key11": "2rHNFbQ4Eompz3dYNKzbJnoDHPTVDogzNDgqTCk41WvmQXZfKuTwPQhRNfVLCgxHknECXQzgy2LWi3xQjDLe1XFh",
  "key12": "5fQZ7gkXSjHfTUnocrZ6hXh7gK12LomqfHDERC2PKaQJw6HfsMdv2TZSeRF1Dh4pkZNDeZ3H33ewxwxgvCfPNuxv",
  "key13": "47X1ygbASUeugXNqSdeN1cGf1gVHbrzfRVT5BvNABCXgyaKjfiXQafjGoUXrChJFD649KALXcD9Ck2nJM8Px9KbS",
  "key14": "4SKij6XmDCB1Tr66o2fxNsBcQqWeFBL2RwBDK1EGt2woM9eh3Tsy24sPHMtm1gxPPA5tjeD2QtTENpHfkEYjguBi",
  "key15": "5SEUgcVECuxYjuofbZYEsqhcxUfZM6wEWWoP5fH4Wt89ggKVoZ5m41hD3w1pG1qqV83kNCSHya7HQimSvEHzXTTF",
  "key16": "4QpGqfucLgvyBUZjTwnZayqEdKfrjJ1PLX5RkGHuxn9RURAL9zhXPzb2uG1a4GwezJD9w1argHSaZQqcmiubGTmN",
  "key17": "pzxDGSgquHeaz9LPTjp3SpGB4c6s7ipstUcZgzbMhT5mwZa9DcJYrW3utMxNN76RCHsemoVdfwnZ2jVLvMy32Qp",
  "key18": "bBDXPXBEyEYpAjN4qUtChXhuw4d8ynPUMsdTZ5Cp4vGXosMPZ122ZNwExvsj1oBEkpHDC8kUG7GfYiTNGGUmQYz",
  "key19": "4Qob2MGCyY5Qo3i5TzWkmQvpuKQVCadx7UtVw5bFCkTTsjgFcu4LvuCnF73Gh8c6X35UMqqT3JSVM6myNH9mNhz9",
  "key20": "2WcSdVfemjqSKWyCQdnrkZxLysaDtPjcdSoWCLgP9wpLrj68kpgBFgcLpdYJYJjorhMSJRK2RrLGus1rqJCgTpdZ",
  "key21": "4etbc3WaHNEWPhqHRBEfnbDwKUKYaj5ibuMwzqCB87kuffpuH69epHaz2VEtiJHZR3t7j2FcvRVsZRr3R9RFtDGe",
  "key22": "4PQBpUhWvmN7wYeY74QNg7GBPFMSN1MhtuQgb6autsUzpsaFDJrGRZWhjLKG6KhvmQ4TVJs6fomuPiaXGupazGja",
  "key23": "3W5v5JA832xijeJFzYU1FcTzEAzjn4pP19BHr3xu7DofcUM4JvoYdAdBz5XCN8e33vPnmevj8vjdSJ4yvBY3fhEU",
  "key24": "4qSfHKmB1fZPnZ7m5yJT9xNGhww8tDQSbRMJU2r2KxpsH7tz2Dg57fcEZF7YwcahGU9bXgX8eRvMbei8SCdvnTkm",
  "key25": "2ugMwXzboqjDpqEvUvH7ofBTU85X2nvZKh1xWtE2ZeDfFiJ1oT1UonipYp2SrAUBKYZPkaQEwrFY62XBxvNdsRAw",
  "key26": "5eeFsTZH1WxA6zoAkAUwBoKzM4ua6QjgWSVYVqJYVrcaY36DsjQwR7GR5S2mPgPKvpdsZaN8NY1g4MgqtpBr9iK2",
  "key27": "2bEgtK1Mg2CpwaUPGsqEhSgL4JwbfekG4JbJmwyJjT7KFKbL4EYwxCJ47EnwQLZfUPjGzBakpcfZqLEzhdFbV7s5",
  "key28": "31HWA8KSHPtNcnJEo9ZeK4shq8eAfq7Yzy5GRW9k38JxSg11u9A1iYmz84YnBVB67SE3HL4wzoMzLLWx9h5ZXWr4"
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
