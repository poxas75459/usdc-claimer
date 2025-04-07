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
    "3qcnxJuH8oRwR7YYz43ZCJL6sTP21Ps4VjcxPNwbhaap6bKhpnREDkGE8qJ4VheAJXt8zmj4yFdrAkcXcuvF1gZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRQMk35KykWyocfjkbqoJRrUeDJmfcPop7J9WJjS3s2EjZAcKMeg19E9VhZr5jgCqGSaPkwCGwJHLJm9wycrHVw",
  "key1": "55gcbTnf2axSLgiLoKUi1m59uu2nhRTsE2zv4WMEKjMgfMAboxkRmHV1XM593Y8KoaeBCvAyFLswC9TWK5DnDr74",
  "key2": "fjftoc1DsG3xzgx6gUBaok6518KSYbGA9HBSFRJRnKhW8JxmJ5BWdSrEYHQ5JST6bh9i5hpY3mrCJNKaaMd5Es6",
  "key3": "33CDUjT2f4PLLzYLB2HZqwCgtLwsGGiANPHKMJYuddJWfCNNzNUzagdBeBKnHqAYpTjL49kcxUSiFQdREPp5vUZe",
  "key4": "5VtbJKm7wVgfzN5u2qdAgwUbQEnWta9AViZ9NLhwArGBkvm1rLZuWA85ReWvhaJ1baqrdhRnFRqULaqEWNwtZbS9",
  "key5": "53sWeyypBcTgUV1yMoXro9EtkrfUgBq6QtjAnbbggzgK4GCirRm6rW2WRQS16jbyucLrcjpNewYjR3LVghYFUQZ",
  "key6": "2wH5A2mD8zTdxohYfs5sfL5mweCXuabGfMaAZT5oBPdQq12ehevRJQ2CcTnDbqECke44DzbgpvUsrDwPhEBLGjzR",
  "key7": "2if3gSRdkN7gKDqBfdJrYkTTnwVhAhBUpJLv2Fhoitq1UsJBJ9HEUwa2idRhJx4fPXSnFDTCj4Rb9L1uovwrsqhe",
  "key8": "5jnCKKrPof15PHEM7PgsnhoMy2e2LPUSR5pjCKjzm8aKXADKQnm2teYYJcpLVLhNx2mcAV7MJCTpojMuUanoN8DH",
  "key9": "Fu4NtwAe8kBShzx2vrLQHENrsqY6PgeWjg2MRkiEGMrvZKupCqKpxQqVMd2Bqk9VJVYeisrUNBsLkRyJhiA4Wzo",
  "key10": "3stxEXGoJ6ZZcSuVbKYQQS8GXVXXSbBvzuro2acsTNEWLUH2wvHscJrFEMvDVo5CM1uZGjepzb3dwGREghEFn1Fx",
  "key11": "41RScN5kDZQQxdfbtQ7WQ9TNi49CtfDSwh4CG2dW9wAfU5ECUgxoEfSxpPWMisXKHqjyCP4rTePYKEBbdtjfT5Ez",
  "key12": "3FdFynpK5SL8FP8Y6AgwL3VND7LLhFH8keW4k44cHaH5FdLka3iKnmHsmatqotHp4ubV4dx6Arh8wz3Q4F1JVQfJ",
  "key13": "2RNNQhb8NPcFAKwjp7tfPpR49gLxR1VWfQarJLDCcaJCAf3EA1sb1N9bhh7SRsgiypdT4bkfgMR4PBMixBZvRKfC",
  "key14": "5oZy3sfKXDP4WfA5TfXKeHTCracVHeg5Bd6iA6sg5NA9kRCdZ4FWAG198tRUR79fipYqSnN4VJA15y6abUqVHj8J",
  "key15": "4yXe9L66JPsj25vtMqY1Ws2a1hgrPh9hAzJQMjLxKR2RcZTv6rtmsD3C5rjpDQc35cAVWjxMCrmp786ArLNomrvF",
  "key16": "4rCF6iooDdZvq6crHdFGSxeEPxUTin1TyNyCrTQ7MMScJ6ycGB7Y84ffbU3Pt58fG4hsqsd464jHykuExKnFZX3w",
  "key17": "2V1ShzwLD5cRD87aQHctNWt2JP28L5emantE7TgD2YBFJzRPnk9xqhFmQHu7XNvaqNTMvBaMrc8rDwCwvtdq6MHx",
  "key18": "2QW25gZ3DJdbQicdEQ9rAXCX3a9WqVFcV1MA93GX2W6JXgAmG3YRLRbf2dAujHfe1Hs2iyyfDSmvWHp7Qi3GuGsD",
  "key19": "2DqgsvnwTpPFz1B8EZcmkcK2gGA2KHT2BsNmQ2Pc8rq1mdRpx7TdF3fbeg697JaChRYvaoNeB6Mxi4zaXeLBWrg5",
  "key20": "4SCAMjL8QzPAFRDw5dt5mcwKnDopGyneHa5tuH37VZ1nmh3k2LysXS9BjvJbsAdoTZwsFXfhDU75SNwgVVaRE5bL",
  "key21": "65RBaTZbVSx1X94koQzP8EsVRDK58LfdHkN5H7q1yzPb7nTVDwHB7aBCqspNscUomcbVTQP1dCiYi2rMkB1CzQLc",
  "key22": "w26UMbY4DTLA5ekCXhxwZUJtfvLpzBXjJ2rjPVwJNuYuX3gBL21evx8EAuyLDutW4RNRHpXeVLQrZ4jsexv5oXr",
  "key23": "47KqTA9iNRUeiB3msTUuGTVdGWTj7MsXx4uGbD3bjR3BDh2cbWAdHi5dhkNyuaiUdfqgrjqkrB3piK9c26JB4RMP",
  "key24": "5DKQeg4FqTDy65RV1h4KndrXLpVjSxy2cB1UzC4LstoYDaD6CGBf8cGtdE7XWGNEr6j31C2K6uv1G56rdAoPjkbP",
  "key25": "4Bk5wA52zuw49iqJXeNNAP2cb5RbRMXcgGFVehf78nUtHmKwbXLZh2z1ExsCMZomUSFnFEYk4veZqPdd6t9rU4qr",
  "key26": "2cKXVoXr7sbsYkb2LTPBf2JQ2oz3vxbhNLrgGQg98Z3bVbQzGs1R3ULnQY8ErkXvGfvAbiUDzMCgdP7LCsVk2guE",
  "key27": "2QPYWPHPmqxkfLqirk88iwbwHkQv8pJdoFCwpKqbn6TeNUNFCrWamCQSaRBoDkQxi1YrkoCW4LvNChJsZpdcPgz5",
  "key28": "5FARxCXgH1hQTDucKfew4C6WMDb3jyX7suPrbhCMP6mgWkft43eykEGpEchbRG6jnC9YREx9PqDRMSMiCMqKLAHu",
  "key29": "JWbPEraQsSWQDqBLNpahSqYexgz2vvnJUydJBR5Yti2WWUSXxtEwDCRgWFjSBviVWz7g9HBttnKyTNJQcQ1TqfV"
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
