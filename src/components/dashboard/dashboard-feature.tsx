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
    "4n5JdUveKaJM2gVvDP7V4DfAa4vPZqxeXcZHs7DznKeKkskDZiF4334mhYEZtzqPfJfauXD3Go2HskFnAGzDUWLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6zLuuT7jR8avdwkcGfbXkgcEEY4p19eFjfVf9uYHatghqwwYoaJtdGBVcYB5ViMfXJ1QdZMucGkFW2vDr8gwRBJ",
  "key1": "GGyScJ89mMfC9N6ntZvDPkdbSDh89HnPBGYCvcSaaFizRedsP3BUr1Wv8Nkzx22RSYLi3cDYbB9X8vfhfWUGgDt",
  "key2": "41eujGneKTMEXsZjjaLgeCfdVEXgcse3jjWPJrqDiWUY9ZjSstbSENXYCUZELB3qGE4rS7BcFx74AqjTgbaKuVBR",
  "key3": "5pMvezRgxSS2xJMxDRz2nwkfH5YQfmRiqUNMtyY5vv3umKhtvN4u8gLtVTph9S7djfwaAF232tqfJPcSKc26pTdG",
  "key4": "4jTmt97edrPBbSvr44NTnG4R9DKcLYKSs5ZHy6jvLgSq2dx5uWv2UbWuXnZXrDgiCqBj6yXZxR7jxT2Cih7AH6v8",
  "key5": "dbfW3eK9nAkoDdQZqkqieA72j64iy17H9PnfouLqLs1Zoc9EDoR78kAz9Us9z63rGeG4WoWoDRJHx8YEEYcqB4r",
  "key6": "pKUX1eqWqL2kto3sV7Bj2tF7uDg5dRiU5FuwUKvyteUPnaMrscWLgQyWp8sZdmA6qYw81gvv65CMuSPd93ZvCvv",
  "key7": "4TUzjZEajmaWiuT2LamKUUnJQUBjyPXGLqjJ1mkqTKW8EhKFk47RhZncabXRs99AD56TpLMmkL9KtQJT89tDMfnm",
  "key8": "3mMNxHngXXCpA6hLjvFg5vFnFEThXztDfkGAJAEhHRFX6LXwzx4qYgLPFmw1YmwVq1PaRQAYMc49jEZLKxBDDEvc",
  "key9": "oFWmGZMaEu5RF8xAUq5CWpnSecCQ6Vr34sxifcfTXuZJY8R8vvN8X8fgH3g3Yk339bHP54CwYwm6JAmN12xwSfu",
  "key10": "5VdYd3gpguLfrWpWsZVqvoQibRD7rU4ZT87ZBDmyobZAmLAKytCjfE6sfeEkcA3a62178Y197Fwzg6tek6ejSqYa",
  "key11": "HuGdcorxxLw3dEYyv6e8LqUgLGY8Lsy7vWLQHdZ9mzSH2nixk4NB1uZJgzf9wunkAW5k7JJT21sNKeomM8kL27y",
  "key12": "4LY7JcbNiX4Y8Uw7dY5WkAdkSHhF2u9hhPDcYujHeSKywyHXURfDGmepTtEPSi4huptFiHsZL7JsrESKQE2NmceG",
  "key13": "5bQP5dEXSQV2unw5E53fDxzENuBtMDUDCMG1Cgh5H2u6ygiXKCXKtHptUSCrS8R3C5kucZiMwYtq99wuenQijx7H",
  "key14": "5hNrfJc6emt1XAAXs4ARjfwxp12MkVFv7vNz3GURf2iWNzV1NYrrph5ZkFEQHN5iYN3gQG1mB36pe2wCF9PqjscU",
  "key15": "5HDGqbMoXm7VyFfqZxxg9jFbYiTndx7Pe6973SNT1kYVmbrJamagDodJTzttRNmHUBe1CbuTFrJMRY5qafYfdyXh",
  "key16": "596oo8rP4uWXdNjEmArZZVRcrGBbAQ8XP6enmRQbeg5Hz1QRa8ijNRENx639hNcPFnVeDVFhkdLfLA2n7uyxAdtX",
  "key17": "2KmMrwYGi81infW5A3WZxj9wfCPFXv53VE6iWXpKvnJSmtyW242R9qTGYy1xzRnZWESwGkpoVXEAWCfvchfHYsRZ",
  "key18": "2vP2C3Ct99zAL2zZUmqb9yh7jX2BG6APPTaGcmNYVd2HZWGUmKi24dN1r6oqgHHZWiNgFokP1giDjDhS7qZaSLXP",
  "key19": "2mLmRc6Akr7R4DXPTws7fVhmRcwPq5wxBvow5kjm1tydfjrWxzmUq1UbwRqnz9UqPpF21MTBWiXjiD1PZUzUAGQi",
  "key20": "R3hckvKDL2qRoQ1xcLmX1Sa7kpqhXP86TinmDWgD3Fwzs2vEFRUn3NzoDnCnEDGL3t9XN9p3MEkPbSLsbb5Gs2L",
  "key21": "KTEYSgJUyVxc3rye4gPsz1XVmR2u29yw2DgwzzwYQCFdueXQ69zh9pxHbVWFbT7RWVKEjQD2ehs89vhvU4xZv7K",
  "key22": "gtqjV1pbbMv2G2g6kFNQN1GRYTF1gVioseN51STbkLgKYGMVdKRgqb3VKzN6wxHhZzG8kiZcpxyH64QCVd56qAz",
  "key23": "4LnvtAnGcpZMW5JsgLvyjqyryb9XixvSS1hU37JJvaJBE7CUHc5ymLfuH1Z9wn3VK4FJVC3vJdysC9Um4cCFN6rZ",
  "key24": "4tMJ71hiZWDhWpRsHpFx8cXuFbSkUK4ef5GjKeBYrBBwQkZfd66hX5i4MtdpvwTAB1zwswvEv3QzV8Bx1PGCsQPh",
  "key25": "3RF6zPCmsoXwCUCARREWPKHrLtxBsVCaMf9mxrFkNkoUyZfZLxgVXN2M6y1YFDuBCjLBMt8ErUqpxPHXyZhsiYfZ",
  "key26": "41D2otU4TXNYPnUzq2GqAh2CCoeFJs2mXwXaiQye8BGz5Et3oLp4H7MRcPfPrbm52zctp21qUPARMEZbhrbZFdCX",
  "key27": "5VBAfAhLAEaBqR4P73uMmfc8qCWxQKWoZb2zfKJU8WxvLw6BsP2VQcRAffjrWBWv9WX8Q6M6Y9ff5YAco1cXTa8K",
  "key28": "39NwZB5oYPHKzNtcwVDjV4HrHrvCt1d1eyafDNaUBmTAEHwunKaFhvneqCtsdNay3XeigZGNcgsD6Zmgxe3T6CfJ",
  "key29": "659MQUeA5SVbsbGGFCCNhdvSb3VwcKzQXDtsfUNZmaG5oLbFgSbmKSTArRRQp8Vp8s7FTnHj9eKfmESbqexj5R23",
  "key30": "3SjaFfjR9DzDdyZgNHdsAPrR8ofAPQJoEhkaduT5Dg5U6TxAH1ra14sgnCEtH7VbCvqRsN5cS3MkUFJY6AJwtbhN",
  "key31": "4coBz1iPyGKjE36hW64STgbLzQpzat8BTR26yxfPc89xEZ7u5drWGsdvCMoq2eVkYNs866Y4mrg3jPrncoaGstPe",
  "key32": "2KnGUrHoLN5Adhrqp4qDihjJafWDsmfJ1msBu5pofwaWNJJfzTFYirFDy3ffZvbSjAn6zMVZQnVPCnL7sm3z7ALJ",
  "key33": "Giv9sMp3vbpyu6qfPKe4f1NxVuSMviURX6ndcsidioVWodapEL8LRogtz1936dHEUKZ6JMm3vwwFMZofaB9T63k",
  "key34": "2TcemR17R4KepEqioniwLK8N7n5XtvyQ2r2C5t16eY6sAvYyKkoYUS9zHbwhgLxJj23gAPb55VxKD1FXvHZ5tpGX",
  "key35": "2ubB5Cu1v4fjqzk7uSJ78DX3XaRR4SytM8vpFb5jtpvSPnV19KPMFGV4Q7Mh9H3895WTtzzFPBoCzJ2onbqjRphh"
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
